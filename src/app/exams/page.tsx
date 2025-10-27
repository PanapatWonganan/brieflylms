'use client'

import React, { useState } from 'react'
import { Search, Clock, Users, BookOpen, Filter, Star, ChevronRight, Trophy, Target, FileText } from 'lucide-react'

interface Exam {
  id: string
  title: string
  description: string
  duration: number
  questions: number
  participants: number
  difficulty: 'ง่าย' | 'ปานกลาง' | 'ยาก'
  category: string
  rating: number
  price: number
  tags: string[]
}

const mockExams: Exam[] = [
  {
    id: '1',
    title: 'แบบทดสอบข้าราชการพลเรือน ระดับ 3',
    description: 'แบบทดสอบครอบคลุมเนื้อหาสำหรับสอบข้าราชการพลเรือน ระดับ 3 ทุกส่วน',
    duration: 180,
    questions: 120,
    participants: 1250,
    difficulty: 'ปานกลาง',
    category: 'ข้าราชการพลเรือน',
    rating: 4.8,
    price: 299,
    tags: ['แนะนำ', 'ยอดนิยม']
  },
  {
    id: '2', 
    title: 'แบบทดสอบสำนักงาน ปปช.',
    description: 'เตรียมความพร้อมสำหรับการสอบเข้าทำงานที่สำนักงาน ปปช.',
    duration: 150,
    questions: 100,
    participants: 890,
    difficulty: 'ยาก',
    category: 'หน่วยงานเฉพาะ',
    rating: 4.9,
    price: 399,
    tags: ['ใหม่']
  },
  {
    id: '3',
    title: 'แบบทดสอบข้าราชการครู',
    description: 'ข้อสอบเตรียมความพร้อมสำหรับผู้ที่ต้องการเป็นข้าราชการครู',
    duration: 120,
    questions: 80,
    participants: 2100,
    difficulty: 'ปานกลาง',
    category: 'การศึกษา',
    rating: 4.7,
    price: 249,
    tags: ['ยอดนิยม']
  },
  {
    id: '4',
    title: 'แบบทดสอบข้าราชการตำรวจ',
    description: 'เตรียมสอบข้าราชการตำรวจ ครอบคลุมทุกส่วนของการสอบ',
    duration: 210,
    questions: 150,
    participants: 1680,
    difficulty: 'ยาก',
    category: 'ความมั่นคง',
    rating: 4.6,
    price: 349,
    tags: ['แนะนำ']
  },
  {
    id: '5',
    title: 'แบบทดสอบท้องถิ่น',
    description: 'สำหรับผู้ที่ต้องการสอบเข้าทำงานในองค์กรปกครองส่วนท้องถิ่น',
    duration: 90,
    questions: 60,
    participants: 950,
    difficulty: 'ง่าย',
    category: 'ท้องถิ่น',
    rating: 4.5,
    price: 199,
    tags: []
  }
]

const categories = [
  'ทั้งหมด',
  'ข้าราชการพลเรือน', 
  'หน่วยงานเฉพาะ',
  'การศึกษา',
  'ความมั่นคง',
  'ท้องถิ่น'
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'ง่าย': return 'bg-green-100 text-green-700'
    case 'ปานกลาง': return 'bg-yellow-100 text-yellow-700' 
    case 'ยาก': return 'bg-red-100 text-red-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}

export default function ExamsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด')
  const [filteredExams, setFilteredExams] = useState(mockExams)

  const handleSearch = () => {
    let filtered = mockExams

    if (searchTerm) {
      filtered = filtered.filter(exam => 
        exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exam.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'ทั้งหมด') {
      filtered = filtered.filter(exam => exam.category === selectedCategory)
    }

    setFilteredExams(filtered)
  }

  React.useEffect(() => {
    handleSearch()
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              แบบทดสอบข้าราชการ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              เตรียมความพร้อมสำหรับการสอบข้าราชการด้วยแบบทดสอบมาตรฐาน
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="ค้นหาแบบทดสอบ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600">แบบทดสอบ</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">25,000+</div>
            <div className="text-gray-600">ผู้เข้าสอบ</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Trophy className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">89%</div>
            <div className="text-gray-600">อัตราผ่าน</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">5,000+</div>
            <div className="text-gray-600">ข้อสอบ</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Exam Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredExams.map((exam) => (
            <div key={exam.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="p-6">
                {/* Tags */}
                {exam.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exam.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          tag === 'ยอดนิยม' ? 'bg-green-100 text-green-700' :
                          tag === 'แนะนำ' ? 'bg-blue-100 text-blue-700' :
                          'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {exam.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {exam.description}
                </p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{exam.duration} นาที</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4" />
                    <span>{exam.questions} ข้อ</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{exam.participants.toLocaleString()} คน</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exam.difficulty)}`}>
                      {exam.difficulty}
                    </span>
                  </div>
                </div>

                {/* Rating and Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{exam.rating}</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    ฿{exam.price}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <span>เริ่มทำข้อสอบ</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredExams.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">ไม่พบแบบทดสอบ</h3>
            <p className="text-gray-600">ลองค้นหาด้วยคำค้นอื่น หรือเลือกหมวดหมู่อื่น</p>
          </div>
        )}
      </div>
    </div>
  )
}