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
        FROM EAL_student;
        
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
            console.log(row);
            // Create programme object
            var eal = new student.EALstudent(row.Student_ID, row.First_name, row.Surname, row.DOBDate);
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
    SELECT lesson.Lesson_ID, lesson.Title, lesson.Topic_ID, keyword.Keyword_ID, keyword.Word, language.Language_name, translation.Translation_ID
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language 
    WHERE keyword.Keyword_ID=lesson_keyword.Keyword_ID and lesson.Lesson_ID = lesson_keyword.Lesson_ID 
    AND translation.Translation_ID = keyword_translation.Translation_ID and keyword.Keyword_ID = keyword_translation.Keyword_ID 
    AND language.Language_ID = keyword_translation.Language_ID and language.Language_ID = "it" and lesson.Title = "Operators" group by keyword.Keyword_ID
        
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
            var translate = new student.KeywordTranslation(row.Keyword_ID, row.Word, row.Translation_ID);
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
            console.log(row);
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
exports.getTopics7 = function(callback) {
    // Create SQL statement
    var sql = `

        Select * from Topic where Topic_ID LIKE '%7C%';

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
            var top = new student.Topic(row.Topic_ID, row.Topic_name);
            // Create student object
          
            // Add student to array
            topiccs.push(top);
        }
        // Execute callback function
        callback(topiccs);
    });
};
exports.getTopics8 = function(callback) {
    // Create SQL statement
    var sql = `
    
        Select * from Topic where Topic_ID LIKE '%8C%';

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
            var top = new student.Topic(row.Topic_ID, row.Topic_name);
            // Create student object
          
            // Add student to array
            topiccs.push(top);
        }
        // Execute callback function
        callback(topiccs);
    });
};
exports.getTopics9 = function(callback) {
    // Create SQL statement
    var sql = `
    
        Select * from Topic where Topic_ID LIKE '%9C%';

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
            var top = new student.Topic(row.Topic_ID, row.Topic_name);
            // Create student object
          
            // Add student to array
            topiccs.push(top);
        }
        // Execute callback function
        callback(topiccs);
    });
};
exports.getTopics10 = function(callback) {
    // Create SQL statement
    var sql = `
    
        Select * from Topic where Topic_ID LIKE '%10C%';

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
            var top = new student.Topic(row.Topic_ID, row.Topic_name);
            // Create student object
          
            // Add student to array
            topiccs.push(top);
        }
        // Execute callback function
        callback(topiccs);
    });
};
exports.getTopics11 = function(callback) {
    // Create SQL statement
    var sql = `
    
        Select * from Topic where Topic_ID LIKE '%11C%';

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
            var top = new student.Topic(row.Topic_ID, row.Topic_name);
            // Create student object
          
            // Add student to array
            topiccs.push(top);
        }
        // Execute callback function
        callback(topiccs);
    });
};
exports.getTranslates = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT *
        FROM
            Translate;
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var translatte = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var tran = new student.Translate(row.Translation_ID, row.Translation);
            // Create student object
          
            // Add student to array
            translatte.push(tran);
        }
        // Execute callback function
        callback(translatte);
    });
};




exports.getAllKeywords= function(callback) {
    // Create SQL statement
    var sql = `
    SELECT * from Allkeywords
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var allkeywords = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var allkey = new student.AllKeywords(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Translation_word, row.Language_name, row.Spanish_word, row.Spanish_name);
            // Create student object
          
            // Add student to array
            allkeywords.push(allkey);
        }
        // Execute callback function
        callback(allkeywords);
    });
};



exports.getBinaryLessons = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT Keyword.Keyword_ID, Keyword.Word, Translation.Translation_ID, Lesson.Lesson_ID, Lesson.Title, Topic.Topic_ID, Topic.Topic_name
        FROM
            Keyword, Translation, Keyword_Translation, Lesson, Lesson_Keyword, Topic
        WHERE Translation.Translation_ID = Keyword_Translation.Translation_ID AND Keyword.Keyword_ID = Keyword_Translation.Keyword_ID
        AND Lesson.Lesson_ID = Lesson_Keyword.Lesson_ID AND Topic.Topic_ID = Lesson.Topic_ID AND Lesson.Lesson_ID ='L1B11'
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var Binary1 = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var Bin1 = new student.BinaryLesson(row.Keyword_ID, row.Word, row.Translation_ID, row.Topic_ID, row.Topic_name, row.Lesson_ID, row.Title);
            // Create student object
          
            // Add student to array
            Binary1.push(Bin1);
        }
        // Execute callback function
        callback(Binary1);
    });
};
exports.getLessonKeywords = function(callback) {
    // Create SQL statement
    var sql = `
    SELECT  lesson.Lesson_ID, lesson.Title, keyword.Keyword_ID, keyword.Word
    from keyword, lesson_keyword, lesson
    where keyword.Keyword_ID = lesson_keyword.Keyword_ID 
    AND lesson.Lesson_ID = lesson_keyword.Lesson_ID
    AND lesson_keyword.Lesson_ID ="L1B11"    
        
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var leskey = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            var les = new student.LessonKeyword(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word);
            // Create student object
          
            // Add student to array
            leskey.push(les);
        }
        // Execute callback function
        callback(leskey);
    });
};
exports.getStudentClassGroups = function(callback) {
    // Create SQL statement
    var sql = `
    Select EAL_Student.Student_ID, EAL_Student.First_name, EAL_Student.Surname, EAL_Student.DOBDate, EAL_Student.Year_group, Class_Group.Class_Group_ID, Class_Group.Class_Group, Language.Language_ID, Language.Language_name 
    FROM EAL_Student, Class_Group, Student_Classgroup, Language 
    Where EAL_Student.Student_ID = Student_Classgroup.Student_ID AND Class_Group.Class_Group_ID = Student_ClassGroup.Class_Group_ID AND EAL_Student.Language_ID = Language.Language_ID AND Class_Group =”8Ait1”;
        `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Lessons
        var classgroup = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            console.log(row);
            // Create programme object
            var group = new student.StudentClassGroup(row.Student_ID, row.First_name, row.Surname, row.DOBDate, row.Year_group, row.Class_Group_ID, row.Class_Group, row.Language_name, row.Language_name);
            // Create student object
          
            // Add student to array
            classgroup.push(group);
        }
        // Execute callback function
        callback(classgroup);
    });
};

