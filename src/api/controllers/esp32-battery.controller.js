

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
      const data = await Promise.resolve({
        percentageOfTheBatteryOfTheDrone: 100
      })
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
      const data = await Promise.resolve({
        percentageOfTheBatteryOfTheDrone: 100,
        id: 1
      })
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
      const data = await Promise.resolve({
        percentageOfTheBatteryOfTheDrone: percentageOfTheBatteryOfTheDrone - 1,
      })
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
