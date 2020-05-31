/* eslint-disable prettier/prettier */
const px2rem = require('postcss-px2rem')
const autoprefixer = require('autoprefixer')

module.exports = ({ file }) => {
  const remUnit =
    file && file.dirname && file.dirname.includes('vant') ? 37.5 : 75

  return {
    plugins: [px2rem({ remUnit }), autoprefixer]
  }
}