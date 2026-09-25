/* =========================================================
   FIREBASE + CLOUDINARY CONFIG
   ضع بيانات مشروعك هنا (من Firebase Console و Cloudinary)
   نفس الملف ده بيتستخدم في index.html و admin.html
========================================================= */

const firebaseConfig = {
    apiKey: "AIzaSyDAv6QWQMJo8FXsTqEhpLk_8tKi2fnVRo8",
    authDomain: "farida-brand-store-c864e.firebaseapp.com",
    projectId: "farida-brand-store-c864e",
    storageBucket: "farida-brand-store-c864e.firebasestorage.app",
    messagingSenderId: "820311034843",
    appId: "1:820311034843:web:e8b5420f111705a47775fe"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* =========================================================
   CLOUDINARY (لرفع الصور مجانًا)
   Cloud Name: موجود في الصفحة الرئيسية للوحة تحكم Cloudinary
   Upload Preset: لازم تعمله بنفسك من الإعدادات (Unsigned)
   الشرح بالتفصيل في ملف الإعداد المرفق
========================================================= */

const CLOUDINARY_CLOUD_NAME = "l8y5u6db";
const CLOUDINARY_UPLOAD_PRESET = "Farida Brand Store";
