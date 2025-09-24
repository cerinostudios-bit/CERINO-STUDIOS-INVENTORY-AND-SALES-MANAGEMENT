const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Gudang = db.define('Gudang', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nama_gudang: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  lokasi: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'gudang',
  timestamps: true,
});

module.exports = Gudang;