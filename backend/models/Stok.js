const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Barang = require('./Barang');
const Gudang = require('./Gudang');

const Stok = db.define('Stok', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  jumlah: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  tableName: 'stok',
  timestamps: true,
});

Barang.belongsToMany(Gudang, { through: Stok, foreignKey: 'barang_id' });
Gudang.belongsToMany(Barang, { through: Stok, foreignKey: 'gudang_id' });

module.exports = Stok;