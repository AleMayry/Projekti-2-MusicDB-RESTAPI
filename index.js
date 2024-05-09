// This node.js app uses Express, Mongoose, Axios, and LastFM API to create a MusicDB (DB = Database)
// Required packages (npm) below

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
//const mongodb = require("mongodb")
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

////////////////////////////////////////////

// Initializing Express application & using CORS and bodyParser middleware(s)
const app = express();
app.use(cors());
app.use(bodyParser.json());
////////////////////////////////////////////

// Constants for MongoDB URI and LastFM API key

const MONGODB_URI = process.env.MONGODB_URI;
const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
/////////////////////////////////////////////////////////////////////////////////////////

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '/public')));

//////////////////////////////////////////////////////////


// Async function: connects to MongoDB by Mongoose
async function connectToMongoDB() {
    try {
        const connectionString = 
            process.env.MONGODB_URI;
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error when connecting to MongoDB", error);
    }
}
connectToMongoDB();

// Album model and schema defined
const albumSchema = new mongoose.Schema({
    title: String,
    artist: String,
    year: Number,
});

const Album = mongoose.model("Album",albumSchema);

// Serving index.html file on the root
app.get("/api/getall", async (req, res) => {
    try {
        const albums = await Album.find();
        res.status(200).json(albums);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Album by ID
app.get("/api/:id", async (req, res) => {
    try {
      const album = await Album.findById(req.params.id);
      res.status(200).json(album);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// Adds new album
app.post("/api/add", async (req, res) => {
    try {
      const album = new Album(req.body);
      await album.save();
      res.status(201).json(album);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// Updates album by ID
app.put("/api/update/:id", async (req, res) => {
    try {
      const updatedAlbum = await Album.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedAlbum);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// Deletes album by ID
app.delete("/api/delete/:id", async (req, res) => {
    try {
      await Album.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Album deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// Uses LastFM API to search for albums
app.get("/api/lastfmsearch/:query", async (req, res) => {
    try {
      const response = await axios.get("https://ws.audioscrobbler.com/2.0/", {
        params: {
          method: "album.search",
          album: req.params.query,
          api_key: LASTFM_API_KEY,
          format: "json",
          limit: 10,
        },
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
});

// Starting the server on a port specified in .env file
const SERVER_PORT = process.env.SERVER_PORT || 3000;
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}, http://localhost:3000 or https://projekti-2-musicdb-restapi.onrender.com/api/`));