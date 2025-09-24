const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Barang = db.define('Barang', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  kode_barang: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  nama_barang: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  satuan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'barang',
  timestamps: true,
});

module.exports = Barang;