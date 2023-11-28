const client = require("../../database/mongo");


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
      const data = await client.db("esp32").collection("battery").findOne({ id });
      return res.send({ 
        data
      })
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
  post = async (req, res) => {
    try {
      const { name } = req.body;
      const dronDTO = {
        name
      } 
      const data = await client.db("esp32").collection("battery").insertOne(dronDTO);
      return res.send({
          data
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
      const data = await client.db("esp32").collection("battery").updateOne({ $where: id }, dronDTO);
      return res.send({
          data
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
