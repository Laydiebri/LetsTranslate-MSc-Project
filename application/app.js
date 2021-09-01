"use strict";

// The application layer uses student classes
const student = require("../student.js");

// The application layer talks to the data layer
const data = require("../data/data.js");

// Import express library.
const express = require("express");

// Create express application
var app = express();

// Add static files location
app.use(express.static("static"));

// Add /Lesson endpoint
app.get("/Lesson/:lesson_id", function(req, res) {
  // Return "lesson <id>"
  res.send("lesson" + req.params.lesson_id);
});

// Add /Lessons endpoint
app.get("/Lessons", function(req, res) {
    data.getLessons(function(lessons) {
      res.json(lessons);
    });
  });

  // Add /keyword translation endpoint
app.get("/Keyword/:keyword_id", function(req, res) {
    // Return "Keyword <id>"
    res.send("keyword" + req.params.keyword_id);
  });
   // Add /keyword translation endpoint
app.get("/Translation/:translation_id", function(req, res) {
     //Return "Translation <id>"
    res.send("translation" + req.params.translation_id);
  });
  // Add /keyword translations endpoint
app.get("/KeywordTranslations", function(req, res) {
    data.getKeywordTranslations(function(keywordtranslations) {
      res.json(keywordtranslations);
    });
  });

 // Add /EAL student endpoint
app.get("/EALstudent/:student_id", function(req, res) {
    // Return "Student <id>"
    res.send("EALstudent" + req.params.student_id);
  });
  
  // Add /EAL students endpoint
  app.get("/EALstudents", function(req, res) {
      data.getEALstudents(function(ealstudents) {
        res.json(ealstudents);
      });
    });

// Add /Language endpoint
app.get("/Language/:languages_id", function(req, res) {
    // Return "Language <id>"
    res.send("Language" + req.params.language_id);
  });
  
  // Add /Languages endpoint
  app.get("/Languages", function(req, res) {
      data.getLanguages(function(languages) {
        res.json(languages);
      });
    });

    // Add /Class group endpoint
app.get("/Class_Group/:class_group_id", function(req, res) {
    // Return "class group <id>"
    res.send("class_group" + req.params.class_group_id);
  });
  
  // Add /Class groups endpoint
  app.get("/Class_Groups", function(req, res) {
      data.getClass_Groups(function(class_groups) {
        res.json(class_groups);
      });
    });

// Start listening on port 3000
app.listen(3000, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log("Server started.");
});