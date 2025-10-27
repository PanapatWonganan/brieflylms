'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Star, Clock, CheckCircle, ArrowRight, Play, BookOpen, GraduationCap, Award, Target, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: "ติวสอบภาค ก. ความรู้ความสามารถทั่วไป",
      subtitle: "General Knowledge & Aptitude Test",
      instructor: "อาจารย์ผู้เชี่ยวชาญ",
      duration: "12 สัปดาห์",
      students: 3250,
      rating: 4.9,
      price: 3990,
      originalPrice: 5990,
      image: "/course-general.jpg",
      category: "ภาค ก.",
      examType: "general",
      description: "เตรียมพร้อมสอบภาค ก. ครอบคลุมวิชาภาษาไทย คณิตศาสตร์ ภาษาอังกฤษ และความรู้ทั่วไป",
      bonus: "🎁 แถมฟรี: แนวข้อสอบย้อนหลัง 10 ปี"
    },
    {
      id: 2,
      title: "ติวสอบภาค ข. ความรู้เฉพาะตำแหน่ง",
      subtitle: "Position-Specific Knowledge Test",
      instructor: "ทีมวิทยากรผู้เชี่ยวชาญ",
      duration: "10 สัปดาห์",
      students: 2890,
      rating: 4.8,
      price: 4490,
      originalPrice: 6490,
      image: "/course-specific.jpg",
      category: "ภาค ข.", 
      examType: "specific",
      description: "เจาะลึกความรู้เฉพาะตำแหน่ง พร้อมเทคนิคการทำข้อสอบแบบมืออาชีพ",
      bonus: "🎁 แถมฟรี: คู่มือสรุปเนื้อหาสำคัญ PDF"
    },
    {
      id: 3,
      title: "ติวสอบภาค ค. ความเหมาะสมกับตำแหน่ง",
      subtitle: "Personality & Suitability Assessment",
      instructor: "อาจารย์ผู้เชี่ยวชาญด้านบุคลิกภาพ",
      duration: "8 สัปดาห์",
      students: 2150,
      rating: 4.9,
      price: 2990,
      originalPrice: 4490,
      image: "/course-personality.jpg",
      category: "ภาค ค.",
      examType: "personality", 
      description: "เตรียมความพร้อมสัมภาษณ์ บุคลิกภาพ และการวิเคราะห์สถานการณ์",
      bonus: "🎁 แถมฟรี: คลิปตัวอย่างการสัมภาษณ์จริง"
    }
  ];

  const benefits = [
    "📚 เนื้อหาครบถ้วนทุกภาคของการสอบข้าราชการ",
    "🎯 เทคนิคลัดทำข้อสอบจากผู้สอบผ่านจริง", 
    "📝 แนวข้อสอบอัพเดทล่าสุด พร้อมเฉลยละเอียด",
    "👨‍🏫 สอนโดยอาจารย์ผู้เชี่ยวชาญเฉพาะด้าน",
    "✅ เรียนออนไลน์ได้ทุกที่ทุกเวลา ดูย้อนหลังได้",
    "🎯 การันตีผลสอบ หรือเรียนซ้ำฟรี"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 to-indigo-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-400/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-2 text-blue-100">
                <GraduationCap className="h-6 w-6" />
                <span className="text-lg font-medium">เส้นทางสู่ข้าราชการมืออาชีพ</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                สอบติด
                <br />
                <span className="text-yellow-400">ข้าราชการ</span>
                <br />
                <span className="text-blue-200">แน่นอน 100%</span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                เตรียมสอบข้าราชการครบวงจร ทั้งภาค ก. ข. และ ค. 
                ด้วยหลักสูตรที่ออกแบบโดยผู้เชี่ยวชาญ
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <button className="w-full bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    เริ่มเรียนเลยวันนี้
                  </button>
                </Link>
                <Link href="/courses">
                  <button className="w-full border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                    ดูคอร์สทั้งหมด
                  </button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 text-blue-100">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>15,000+ ผู้สอบผ่าน</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span>4.9 คะแนน</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 overflow-hidden group">
                {/* Background Image with Multiple Overlays */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600">
                  {/* Primary Image Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('/exam-preview.jpg')`
                    }}
                  />
                  
                  {/* Gradient Overlays for Design Depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-800/40 via-transparent to-indigo-900/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full blur-sm animate-pulse" />
                  <div className="absolute bottom-6 left-4 w-8 h-8 bg-blue-400/30 rounded-full blur-sm animate-bounce" />
                  
                  {/* Content Overlay */}
                  <div className="relative h-full flex items-center justify-center">
                    {/* Play Button with Enhanced Design */}
                    <Link href="/courses/1">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-6 hover:bg-white/30 transition-all duration-300 group-hover:shadow-xl"
                      >
                        <Play className="h-12 w-12 text-white ml-1" fill="currentColor" />
                        
                        {/* Ripple Effect */}
                        <div className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-30" />
                      </motion.button>
                    </Link>
                    
                    {/* Video Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      25:30
                    </div>
                    
                    {/* Live Indicator */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded-full">
                        ตัวอย่างคอร์ส
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section with Enhanced Styling */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">โปรแกรมแนะนำ: ภาค ก.</h3>
                    <div className="flex items-center space-x-1 bg-yellow-400/20 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-medium">4.9</span>
                    </div>
                  </div>
                  <p className="text-blue-100 leading-relaxed">
                    เตรียมสอบภาค ก. ความรู้ความสามารถทั่วไป ครบทุกหมวด
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-blue-200">
                      <span>ความคืบหน้า</span>
                      <span>5/20 บทเรียน</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-blue-400 h-2 rounded-full transition-all duration-500" style={{ width: '25%' }} />
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Link href="/courses/1" className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-medium text-sm hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
                      >
                        เริ่มเรียนเลย
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300"
                      aria-label="Add to favorites"
                    >
                      <BookOpen className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
              5 หมวดวิชาหลักการสอบข้าราชการ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              เรียนรู้ครบถ้วนทุกเนื้อหาที่จำเป็นสำหรับการสอบ พร้อมเทคนิคพิเศษจากผู้เชี่ยวชาญ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* ภาษาไทย Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">ภาษาไทย</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2">Thai Language</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                หลักภาษา การอ่าน การเขียน ความเข้าใจภาษา
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <div>• ไวยากรณ์และหลักภาษา</div>
                <div>• การอ่านจับใจความ</div>
                <div>• การเขียนหนังสือราชการ</div>
                <div className="text-yellow-600 font-medium mt-2">📚 300+ ข้อสอบ</div>
              </div>
            </motion.div>

            {/* คณิตศาสตร์ Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">คณิตศาสตร์</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2">Mathematics</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                เลขคณิต พีชคณิต เรขาคณิต และการแก้โจทย์ปัญหา
              </p>
            </motion.div>

            {/* ภาษาอังกฤษ Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">ภาษาอังกฤษ</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2">English</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Grammar, Vocabulary, Reading Comprehension
              </p>
            </motion.div>

            {/* ความรู้ทั่วไป Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">ความรู้ทั่วไป</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2">General Knowledge</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                สังคม การเมือง เศรษฐกิจ และสถานการณ์ปัจจุบัน
              </p>
            </motion.div>

            {/* ระเบียบกฎหมาย Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                <GraduationCap className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-3">ระเบียบกฎหมาย</h3>
              <h4 className="text-lg font-medium text-blue-600 mb-2">Laws & Regulations</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                กฎหมายปกครอง ระเบียบราชการ และพ.ร.บ. ข้าราชการ
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
              คอร์สติวสอบข้าราชการ - 3 ภาคหลัก
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              เตรียมความพร้อมครบทุกภาคการสอบ พร้อมแนวข้อสอบและเฉลยละเอียด 
              <span className="text-blue-600 font-semibold"> *รับประกันผลสอบ หรือเรียนซ้ำฟรี</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-600 to-indigo-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      -{Math.round((1 - course.price / course.originalPrice) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-1">
                    {course.title}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-3">{course.subtitle}</p>
                  <p className="text-gray-600 mb-2 font-medium">{course.instructor}</p>
                  <p className="text-gray-500 text-sm mb-3">{course.description}</p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <p className="text-yellow-700 text-sm font-medium">{course.bonus}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-blue-600">
                          ฿{course.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 line-through">
                          ฿{course.originalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-colors">
                        เริ่มเรียน
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All Courses Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ดูคอร์สทั้งหมด
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-6">
                ทำไมต้องเลือกติวกับเรา?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                ประสบการณ์กว่า 10 ปี ผลิตข้าราชการมาแล้วกว่า 15,000 คน
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-700 mb-2">
                      ทดลองเรียนฟรี 7 วัน!
                    </h3>
                    <p className="text-gray-600">
                      ไม่มีผูกมัด ยกเลิกได้ตลอดเวลา
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">เข้าถึงคอร์สทั้งหมด</span>
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">แนวข้อสอบย้อนหลัง 10 ปี</span>
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-gray-600">ปรึกษาวิทยากรตลอด 24/7</span>
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-600">กลุ่มติวสอบสนทนา</span>
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <Link href="/courses">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center">
                      เริ่มทดลองฟรี
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GraduationCap className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              พร้อมเป็นข้าราชการหรือยัง?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              เริ่มต้นเส้นทางสู่ความมั่นคง ด้วยคอร์สติวที่การันตีผลสอบ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition-colors duration-300">
                  เริ่มติวเลยวันนี้
                </button>
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center justify-center"
              >
                ดูคอร์สทั้งหมด
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}