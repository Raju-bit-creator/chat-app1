const mongoose = require('mongoose')
const colors = require("colors");

const connectDB = async () => {
    const url =`mongodb+srv://rajutamang3456:raju123@cluster0.8y4dsgw.mongodb.net/?retryWrites=true&w=majority`
    try {
        const conn = await mongoose.connect(url)
            console.log(`mongodb connected: ${conn.connection.host}`.yellow.underline);
    } catch (error) {
        // console.error(`Error: ${error.message}`.red.bold);
        // process.exit(1); // Exit with a non-zero status code to indicate an error
        console.log(`Error : ${error.message}`.red.bold);
        process.exit()
      }
}
module.exports = connectDB