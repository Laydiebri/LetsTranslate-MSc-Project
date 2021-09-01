"use strict";


exports.Lesson = class {
    // Lesson id
    Lesson_ID;
    //Lesson title
    Title;
    //Keywords and their translations
    Key_Trans = [];

constructor(Lesson_ID, Title) {
    this.Lesson_ID = Lesson_ID;
    this.Title = Title;
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
  DOB;
  //Language spoken
  Language;
  //Class group
  Class_group = [];

constructor(Student_ID, First_name, Surname, DOB, Language) {
  this.Student_ID = Student_ID;
  this.First_name = First_name;
  this.Surname = Surname;
  this.DOB = DOB;
  this.Language = Language;
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