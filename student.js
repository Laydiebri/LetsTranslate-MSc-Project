"use strict";


exports.Lesson = class {
    // Lesson id
    Lesson_ID;
    //Lesson title
    Title;
    //Topic
    Topic_ID;
    //Keywords and their translations
    KeywordTranslation = [];

constructor(Lesson_ID, Title, Topic_ID) {
    this.Lesson_ID = Lesson_ID;
    this.Title = Title;
    this.Topic_ID = Topic_ID;
  }
}

exports.AllKeywords = class {
  // Lesson id
  Lesson_ID;
  
  Title;
  
  Keyword_ID;
  
  Word;
  
  Translation_word;
  
  Language_name;
  
  Spanish_word;
  
  Spanish_name;
  //Lesson title
  

constructor(Lesson_ID, Title, Keyword_ID, Word, Translation_word, Language_name, Spanish_word, Spanish_name) {
  this.Lesson_ID = Lesson_ID;
  this.Title = Title;
  this.Keyword_ID = Keyword_ID;
  this.Word = Word;
  this.Translation_word = Translation_word;
  this.Language_name = Language_name;
  this.Spanish_word= Spanish_word;
  this.Spanish_name = Spanish_name;
}
}

exports.KeywordTranslation = class {
    // Keyword id
    Keyword_ID;
    //Keyword
    Word;
    //Translation id
    Translation_ID;
    //Word translation
  
  

constructor(Keyword_ID, Word, Translation_ID) {
    this.Keyword_ID = Keyword_ID;
    this.Word = Word;
    this.Translation_ID = Translation_ID;
   
  }
}
exports.EALstudent = class {
  //student id
  Student_ID;
  //student first name
  First_name;
  //student last name
  Surname;
  //Date of Birth
  DOBDate;
  //Language ID
  Language_ID;
  //Language spoken
  Language_name;
  //Class group
  Class_group = [];

constructor(Student_ID, First_name, Surname, DOBDate) {
  this.Student_ID = Student_ID;
  this.First_name = First_name;
  this.Surname = Surname;
  this.DOBDate = DOBDate;
 
  }
}
exports.Language = class{
  // Language id
  Language_ID;
  //Name of spoken Language
  Language_name;

constructor(Language_ID, Language_name) {
  this.Language_ID = Language_ID;
  this.Language_name = Language_name;
}
}

exports.Class_Group = class {
  // Class group id
  Class_Group_ID;
  //Class group name
  Class_Group;

constructor(Class_Group_ID, Class_Group) {
  this.Class_Group_ID = Class_Group_ID;
  this.Class_Group = Class_Group;
}
}
exports.Topic = class {
  // Topic id
  Topic_ID;
  //Topic name
  Topic_name;
  //Subject
  Subject_ID;
  

constructor(Topic_ID, Topic_name, Subject_ID) {
  this.Topic_ID = Topic_ID;
  this.Topic_name = Topic_name;
  this.Subject_ID = Subject_ID;
}
}
exports.BinaryLesson = class {
  Keyword_ID;
  Word;
  Translation_ID;
  Topic_ID;
  Topic_name;
  Lesson_ID;
  Title;
  
constructor( Keyword_ID, Word, Translation_ID, Topic_ID, Topic_name, Lesson_ID, Title,) {
  this.Keyword_ID = Keyword_ID;
  this.Word = Word;
  this.Translation_ID = Translation_ID;
  this.Topic_ID = Topic_ID;
  this.Topic_name = Topic_name;
  this.Lesson_ID = Lesson_ID;
  this.Title = Title;
}
}
exports.LessonKeyword = class {
  // Lesson id
  Lesson_ID;
  //Lesson Title
  Title;
  //Keyword id
  Keyword_ID;
  //Keyword
  Word;

constructor(Lesson_ID, Title, Keyword_ID, Word) {
  this.Lesson_ID = Lesson_ID;
  this.Title = Title;
  this.Keyword_ID = Keyword_ID;
  this.Word = Word;
 
 
}
}
exports.StudentClassGroup = class{
  // Student id
  Student_ID;
  //First name
  First_name;
  //Surname
  Surname;
  //Date of Birth
  DOBDate;
  //Year Group
  Year_group;
  //Class Group id
  Class_Group_ID;
  //Class Group
  Class_Group;
  //Language id
  Language_ID;
  //Language
  Language_name;

constructor(Student_ID, First_name, Surname, DOBDate, Year_group,Class_Group_ID,Class_Group,Language_ID,Language_name) {
  this.Student_ID = Student_ID;
  this.First_name = First_name;
  this.Surname = Surname;
  this.DOBDate = DOBDate;
  this.Year_group = Year_group;
  this.Class_Group_ID = Class_Group_ID;
  this.Class_Group = Class_Group;
  this.Language_ID = Language_ID;
  this.Language_name = Language_name;
 
}
}