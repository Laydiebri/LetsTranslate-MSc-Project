"use strict";


class Lesson {
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

class KeywordTranslation {
    // Keyword id
    Keyword_ID;
    //Keyword
    Word;
    //Translation id
    Translation_ID;
    //Word translation
    Translated_word;
  

constructor(Keyword_ID, Word, Translation_ID, Translated_word) {
    this.Keyword_ID = Keyword_ID;
    this.Word = Word;
    this.Translation_ID = Translation_ID;
    this.Translated_word = Translated_word;
  }
}
class EALstudent{
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
class Language{
  // Language id
  Language_ID;
  //Name of spoken Language
  Language_name;

constructor(Language_ID, Language_name) {
  this.Language_ID = Language_ID;
  this.Language_name = Language_name;
}
}

class Class_Group {
  // Class group id
  Class_Group_ID;
  //Class group name
  Class_Group;

constructor(Class_Group_ID, Class_Group) {
  this.Class_Group_ID = Class_Group_ID;
  this.Class_Group = Class_Group;
}
}
class Topic{
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


