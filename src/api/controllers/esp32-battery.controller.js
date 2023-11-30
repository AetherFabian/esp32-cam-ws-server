const client = require("../../database/mongo");
const { v4: uuidv4 } = require('uuid');


class esp32BatteryController {

  /**
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @returns 
   */
  get = async (req, res) => {
    try {
      const { query: { id } } = req;
      const data = await client.db("esp32").collection("battery").findOne({ id: id });
      delete data._id;
      return res.send({ 
        data
      })
    } catch (error) {
      console.log(error)
      return res.send({
        data: null,
        error
      })
    }
  }

  /**
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @returns 
   */
  getLatest = async (req, res) => {
    try {
      const data = await client.db("esp32").collection("battery").find().sort({ $natural: -1 }).limit(1).toArray();
      delete data[0]._id;
      delete data[0].id;
      return res.send({ 
        data
      })
    } catch (error) {
      console.log(error)
      return res.send({
        data: null,
        error
      })
    }
  }
  /**
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @returns 
   */
  post = async (req, res) => {
    try {
      const { name } = req.body;
      const dronDTO = {
        name,
        percentageOfTheBatteryOfTheDrone: 100,
        id: uuidv4()
      }
      await client.db("esp32").collection("battery").insertOne(dronDTO);
      delete dronDTO._id;
      return res.send({
          data: dronDTO
        }
      )
    } catch (error) {
      return res.send({
        data: null,
        error
      })
    }
  }

  /**
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @returns 
   */
  patch = async (req, res) => {
    try {
      const { query: { id } } = req;
      const { percentageOfTheBatteryOfTheDrone } = req.body;
      const dronDTO = {
        percentageOfTheBatteryOfTheDrone
      }
      await client.db("esp32").collection("battery").updateOne({ id: id }, 
      {
        $set: {...dronDTO}
      });
      delete dronDTO._id;
      return res.send({
          data: dronDTO
        }
      )
    } catch (error) {
      console.log(error)
      return res.send({
        data: null,
        error
      })
    }
  }
}

module.exports = new esp32BatteryController();
