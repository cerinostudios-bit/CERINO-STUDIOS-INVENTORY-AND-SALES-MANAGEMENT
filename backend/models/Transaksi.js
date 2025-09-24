const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Transaksi = db.define('Transaksi', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  tipe: {
    type: DataTypes.ENUM('masuk', 'keluar', 'transfer'),
    allowNull: false,
  },
  barang_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gudang_asal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  gudang_tujuan: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tanggal: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  keterangan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'transaksi',
  timestamps: true,
});

module.exports = Transaksi;