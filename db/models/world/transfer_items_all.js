/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transfer_items_all', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    item_template_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    slot: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'transfer_items_all'
  });
};
