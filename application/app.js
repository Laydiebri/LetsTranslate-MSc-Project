"use strict";

// The application layer uses student classes
const student = require("../student.js");
const sqlite3 = require("sqlite3").verbose();

// The application layer talks to the data layer
const data = require("../data/data.js");

// Import express library.
const express = require("express");

//Import Body parser
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
// Create express application
var app = express();

// Add static files location
app.use(express.static("static"));
// Connect to database
let db = new sqlite3.Database("LetsTranslate.db", function(err) {
  // If an error, print it out.
  if (err) {
      return console.error(err.message);
  }
  console.log("Connected to the LetsTranslate database.");
});

//Get method route
app.get("/",function(req,res){
  //Respond with file transfer to the student login path
  res.sendFile(__dirname + "/studentlogin.html");
})
//POST method route
app.post("/", encoder, function(req,res){
  var email = req.body.email;
  var password = req.body.password;
//Check the entire Login Table
db.all("select * from Login where Email = ? and Password = ?", [email, password], function(error,results,fields){
 //conditional statement- if there are results then re to direct to the Student Subject Choice page.
  if (results.length > 0) {
    res.redirect("/StuSubChoiceComp.html");
  //Otherwise stay on the student Login page
} else {
    res.redirect("/studentlogin.html");
}
res.end();
})
})

// when login is success
app.get("/SSubChoiceComp",function(req,res){
res.sendFile(__dirname + "/SSubChoiceComp.html")
})

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

    // Add /keyword translations endpoint
app.get("/LessonKeywords", function(req, res) {
  data.getLessonKeywords(function(lessonkeywords) {
    res.json(lessonkeywords);
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

     // Add /Topic endpoint
app.get("/Topic/:topic_id", function(req, res) {
    // Return "topic <id>"
    res.send("topic" + req.params.topic_id);
  });
  
  // Add /Topic endpoint
  app.get("/Topics", function(req, res) {
      data.getTopics(function(topics) {
        res.json(topics);
      });
    });

     // Add /Translate endpoint
app.get("/Translate/:translate_id", function(req, res) {
  // Return "topic <id>"
  res.send("translate" + req.params.translate_id);
});

// Add /Translate endpoint
app.get("/Translates", function(req, res) {
    data.getTranslates(function(translates) {
      res.json(translates);
    });
  });
   // Add /Binary Lesson endpoint
app.get("/BinaryLesson/:binary_id", function(req, res) {
  // Return "topic <id>"
  res.send("binary" + req.params.binary_id);
});

// Add /BinaryLessons endpoint
app.get("/BinaryLessons", function(req, res) {
    data.getBinaryLessons(function(binarys) {
      res.json(binarys);
    });
  });
// Start listening on port 3000
app.listen(3000, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log("Server started.");
});