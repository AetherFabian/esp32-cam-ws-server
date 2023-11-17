

class esp32BatteryController {

  /**
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @returns 
   */
  get = async (req, res) => {
    const { query: { id } } = req;
    const percentageOfTheBatteryOfTheDrone = await Promise.resolve(100)
    return res.send({ 
      data: {
        percentageOfTheBatteryOfTheDrone
      }
    })
  }

  /**
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @returns 
   */
  post = async (req, res) => {
    const { name } = req.body;
    const { id, percentageOfTheBatteryOfTheDrone } = await Promise.resolve({
      percentageOfTheBatteryOfTheDrone: 100,
      id: 1
    })
    return res.send({
        data: {
          id,
          percentageOfTheBatteryOfTheDrone
        }
      }
    )
  }

  /**
   * 
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @returns 
   */
  patch = async (req, res) => {
    const { query: { id } } = req;
    const { percentageOfTheBatteryOfTheDrone } = await Promise.resolve({
      percentageOfTheBatteryOfTheDrone: percentageOfTheBatteryOfTheDrone - 1,
    })
    return res.send({
        data: {
          percentageOfTheBatteryOfTheDrone
        }
      }
    )
  }
}

module.exports = new esp32BatteryController();
