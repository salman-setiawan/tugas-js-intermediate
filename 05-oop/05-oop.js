// SOAL NO 1
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
};
  
obj.fun1();
obj.fun2();
// 
// JAWABAN
// 1. Akan menjalankan method fun1 didalam obj, dan menjalankan method fun2 didalam obj
// 2. Berbeda
// 3. Karena


// SOAL NO 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
// 
// JAWAB
// 1. cara untuk membatasi akses langsung ke properti atau method dari sebuah objek
//    kita membutuhkannya karena dapat mencegah perubahan data secara tidak disengaja
// 2. teknik untuk menyembunyikan detail tertentu dari sebuah objek/method dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.
//    kita membutuhkannya karena untuk menyembunyikan detail yang tidak terlalu penting dari pengguna dan fokus pada fitur objek tersebut
// 3. proses dimana sebuah class mewariskan property dan methodnya ke class lain atau childnya.
//    kita membutuhkannya karena dapat menimpa atau memberi fungsi baru tanpa mempengaruhi parent-class yang sudah dibuat
// 4. kemampuan dari suatu objek untuk memiliki banyak bentuk
//    kita membutuhkannya karena memudahkan kita untuk menggunakan metode dengan nama yang sama pada class yang berbeda


// SOAL NO 3
class Phone {
  constructor(brand, storage, ram) {
    this.brand = brand;
    this.storage = storage;
    this.ram = ram;
  }

  getBrandName() {
    return this.brand
  }

  setBrandName(rani) {
    return this.brand = rani
  }

  printSpecification() {
    return `Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`
  }

  setSpecification(storageBaru, ramBaru) {
    this.storage = storageBaru
    this.ram = ramBaru
    return
  }

}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

console.log(phone.printSpecification());
phone.setSpecification(32, 2);
console.log(phone.printSpecification());






// SOAL NO 4
class Student {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.courseOfferings = [];
  }

  getIndexFromCourse(course) {
    const indexOfCourse = this.courseOfferings.findIndex((courseOffering) => {
      return courseOffering.course.getSubject() === course.getSubject();
    });

    return indexOfCourse;
  }
  
  takeNewCourse(course) {
    const isCourseExist = this.courseOfferings.find((courseOffering) => {
      return courseOffering.course.getSubject() === course.getSubject();
    });

    if (this.courseOfferings.length === 0 || !isCourseExist) {
      this.courseOfferings.push(new CourseOffering(course));
      course.decreaseQuota();
    }
  }
  
  courseAttendance(course) {
    const indexOfCourse = this.getIndexFromCourse(course);
    if (indexOfCourse >= 0) {
      this.courseOfferings[indexOfCourse].attendance++;
    }
  }

  takeATest(course) {
    const indexOfCourse = this.getIndexFromCourse(course);
    if (indexOfCourse >= 0) {
      if (this.courseOfferings[indexOfCourse].attendance >= course.getAttendance()) {
        this.courseOfferings[indexOfCourse].grade = Math.floor(Math.random() * 100);
      } 
      else {
        console.log("please fill your absen");
      }
    }
  }
}

class CourseOffering {
  constructor(course) {
    this.course = course;
    this.attendance = 0;
    this.grade = 0;
  }
}

class Course {
  constructor(subject, quota, attendance) {
    this.subject = subject;
    this.quota = quota;
    this.attendance = attendance;
  }
  getSubject() {
    return this.subject;
  }
  getAttendance() {
    return this.attendance;
  }
  decreaseQuota() {
    this.quota--;
  }
}
  

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);