var DataTypes = require("sequelize").DataTypes;
var _Carrinho = require("./Carrinho");
var _Carrinho_Itens = require("./Carrinho_Itens");
var _Categoria = require("./Categoria");
var _Entrega = require("./Entrega");
var _Grants = require("./Grants");
var _Produtos = require("./Produtos");
var _ProfileGrants = require("./ProfileGrants");
var _Profiles = require("./Profiles");
var _SequelizeMeta = require("./SequelizeMeta");
var _Transacao = require("./Transacao");
var _User = require("./User");

function initModels(sequelize) {
  var Carrinho = _Carrinho(sequelize, DataTypes);
  var Carrinho_Itens = _Carrinho_Itens(sequelize, DataTypes);
  var Categoria = _Categoria(sequelize, DataTypes);
  var Entrega = _Entrega(sequelize, DataTypes);
  var Grants = _Grants(sequelize, DataTypes);
  var Produtos = _Produtos(sequelize, DataTypes);
  var ProfileGrants = _ProfileGrants(sequelize, DataTypes);
  var Profiles = _Profiles(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Transacao = _Transacao(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  Produtos.belongsTo(Categoria, { as: "categorium", foreignKey: "categoria_id"});
  Categoria.hasMany(Produtos, { as: "Produtos", foreignKey: "categoria_id"});
  ProfileGrants.belongsTo(Grants, { as: "grant", foreignKey: "grant_id"});
  Grants.hasMany(ProfileGrants, { as: "ProfileGrants", foreignKey: "grant_id"});
  Carrinho_Itens.belongsTo(Produtos, { as: "produto", foreignKey: "produto_id"});
  Produtos.hasMany(Carrinho_Itens, { as: "Carrinho_Itens", foreignKey: "produto_id"});
  ProfileGrants.belongsTo(Profiles, { as: "profile", foreignKey: "profile_id"});
  Profiles.hasMany(ProfileGrants, { as: "ProfileGrants", foreignKey: "profile_id"});
  Entrega.belongsTo(Transacao, { as: "transacao", foreignKey: "transacao_id"});
  Transacao.hasMany(Entrega, { as: "Entregas", foreignKey: "transacao_id"});
  Carrinho.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Carrinho, { as: "Carrinhos", foreignKey: "user_id"});

  return {
    Carrinho,
    Carrinho_Itens,
    Categoria,
    Entrega,
    Grants,
    Produtos,
    ProfileGrants,
    Profiles,
    SequelizeMeta,
    Transacao,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
