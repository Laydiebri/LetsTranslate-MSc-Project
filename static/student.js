class Lesson {
    // Lesson id
    lesson_id;
    //Lesson title
    title;
    //Keywords and their translations
    Key_Trans = [];

constructor(lesson_id, title) {
    this.lesson_id = lesson_id;
    this.title = title;
  }
}

class Key_Trans {
    // Keyword id
    Keyword_ID;
    //Lesson title
    translation_id;

constructor(keyword_id, translation_id) {
    this.keyword_id = keyword_id;
    this.translation_id = translation_id;
  }
}

