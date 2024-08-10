const jwt = require('../../config/jwt');
const db = require('../sequelize/models/index')
const Grant = db.grant
const ProfileGrant = db.profile_grant



const filterRoute = (userInfo, profileGrants) => {
    const uuidRegex = /(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}/
    const matches = userInfo.path.match(uuidRegex)
    const uuid = matches && matches.length >= 1 && matches[0];


    
    const grants = profileGrants.map(
        (profileGrant) => {
            if (profileGrant.grant.route.indexOf(':id') && uuid) {
                return profileGrant.grant.route.replace(':id', uuid);
            }
            if (profileGrant.grant.route.indexOf('?page') && uuid) {
                return profileGrant.grant.route.replace(':id', uuid);
            }

            return profileGrant.grant.route;
        }
    );
    const index = grants.indexOf(userInfo.path);

    console.log(userInfo.path)
    console.log(grants)

    const filterableRoutes = profileGrants.map((profileGrant) => profileGrant.grant.filterableRoute);


    
    if (index !== -1 && index <= filterableRoutes.length) {

        userInfo.isPremisons = true;
    }
}

const authMiddleware = async (req, res, next) =>{
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: "No token provided"});
    
    const parts = authHeader.split(' ');

    if (!parts.length === 2 ) 
        return res.status(401).send({ error: "Token error"});

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: "Token malformatted"});

    const userInfo = jwt.verify(token);
    
    if (!userInfo) {
        return res.status(401).send({ error: "Token invalid"});
    }


    console.log(req.query)
    
    req.userInfo = userInfo;

    const startParams = req.originalUrl.indexOf('?');
    req.userInfo.path = req.originalUrl.substring(0, startParams === -1 ? req.originalUrl.length : startParams);

    
    
    console.log(userInfo)
    
    
    if(userInfo.isAdmin === true){
        return next();
        
    }else{
        let profileGrants1= null

        const profileGrants = await ProfileGrant.findAll({
            include: {
                model: Grant,
                attributes: ["route", "filterableRoute"]
            },
            where: {profileId: userInfo.profile_id},
        });
    
        

        filterRoute(req.userInfo, profileGrants);

        if (req.userInfo.isPremisons) {
            
            return next();
        }else{
            return res.status(401).send({ error: "Sem permição"});

        }
        

    }    



}

module.exports = authMiddleware;