"use strict";

// Import SQLite library.
// Use verbose mode to give more detailed error outputs
const sqlite3 = require("sqlite3").verbose();
const student = require("../student.js");
// Connect to the database.
// Function is callback when connection completed.
// err is any error message that occurs
let db = new sqlite3.Database("LetsTranslate.db", function(err) {
    // If an error, print it out.
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to the LetsTranslate database.");
});

exports.getLessons = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT *
        FROM
            Lesson;
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var lessons = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var less = new student.Lesson(row.Lesson_ID, row.Title, row.Topic_ID);
            // Create student object
          
            // Add student to array
            lessons.push(less);
        }
        // Execute callback function
        callback(lessons);
    });
};
exports.getEALstudents = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT *
        FROM
            EAL_student;
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var ealstudents = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var eal = new student.EALstudent(row.Student_ID, row.First_nme, row.Surname);
            // Create student object
          
            // Add student to array
            ealstudents.push(eal);
        }
        // Execute callback function
        callback(ealstudents);
    });
};


exports.getLanguages = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT *
        FROM
            Language;
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var languages = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var lang = new student.Language(row.Language_ID, row.Language_name);
            // Create student object
          
            // Add student to array
            languages.push(lang);
        }
        // Execute callback function
        callback(languages);
    });
};

exports.getClass_Groups = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT *
        FROM
            Class_Group;
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var class_groups = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var clas = new student.Class_Group(row.Class_Group_ID, row.Class_Group);
            // Create student object
          
            // Add student to array
            class_groups.push(clas);
        }
        // Execute callback function
        callback(class_groups);
    });
};

exports.getKeywordTranslations = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT *
        FROM
            Keyword_Translation;
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var key_trans = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var translate = new student.KeywordTranslation(row.Keyword_ID, row.Translation_ID);
            // Create student object
          
            // Add student to array
            key_trans.push(translate);
        }
        // Execute callback function
        callback(key_trans);
    });
};
exports.getTopics = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT *
        FROM
            Topic;
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var topiccs = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var top = new student.Topic(row.Topic_ID, row.Topic_name, row.Subject_ID);
            // Create student object
          
            // Add student to array
            topiccs.push(top);
        }
        // Execute callback function
        callback(topiccs);
    });
};