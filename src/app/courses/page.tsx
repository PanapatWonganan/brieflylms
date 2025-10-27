"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CourseCard } from "@/components/CourseCard";
import { SearchFilter } from "@/components/SearchFilter";
import { fetchCourses, Course } from "@/lib/api";

interface FilterOptions {
  category: string;
  level: string;
  priceRange: string;
  duration: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    category: "",
    level: "",
    priceRange: "",
    duration: "",
  });

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setLoading(true);
    setError(null);
    
    const result = await fetchCourses();
    
    if (result.error) {
      setError(result.error);
      // Fallback to hardcoded data if API fails
      setCourses(allCourses.map(course => ({
        id: course.id.toString(),
        title: course.title,
        description: course.description || '',
        instructor: course.instructor,
        price: course.price.toString(),
        level: course.level,
        lessons_count: 0,
        duration_minutes: null,
        created_at: new Date().toISOString(),
        free_preview: null
      })));
      setFilteredCourses(courses);
    } else if (result.data) {
      setCourses(result.data);
      setFilteredCourses(result.data);
    }
    
    setLoading(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    applyFilters(query, filters);
  };

  const handleFilter = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    applyFilters(searchQuery, newFilters);
  };

  const applyFilters = (query: string, filterOptions: FilterOptions) => {
    let filtered = courses;

    // Search filter
    if (query) {
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(query.toLowerCase()) ||
          course.instructor.toLowerCase().includes(query.toLowerCase()) ||
          course.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Level filter
    if (filterOptions.level) {
      filtered = filtered.filter((course) => course.level === filterOptions.level);
    }

    // Price range filter
    if (filterOptions.priceRange) {
      filtered = filtered.filter((course) => {
        const price = parseFloat(course.price);
        switch (filterOptions.priceRange) {
          case "ฟรี":
            return price === 0;
          case "1,000-2,000 บาท":
            return price >= 1000 && price <= 2000;
          case "2,001-3,000 บาท":
            return price >= 2001 && price <= 3000;
          case "3,001-5,000 บาท":
            return price >= 3001 && price <= 5000;
          case "มากกว่า 5,000 บาท":
            return price > 5000;
          default:
            return true;
        }
      });
    }

    setFilteredCourses(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">กำลังโหลดคอร์สติวสอบ...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-8 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">เกิดข้อผิดพลาด</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={loadCourses}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-colors"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-700 mb-4">
            คอร์สติวสอบราชการครบครัน
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            เลือกคอร์สที่เหมาะกับการสอบของคุณ ตั้งแต่พนักงานราชการ ลูกจ้างชั่วคราว และตำแหน่งต่างๆ
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>📚 {courses.length} คอร์ส</span>
            <span>👩‍🏫 15+ อาจารย์ผู้เชี่ยวชาญ</span>
            <span>⭐ 4.9 คะแนนเฉลี่ย</span>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            แสดงผล {filteredCourses.length} จาก {courses.length} คอร์ส
            {searchQuery && (
              <span className="text-blue-600 font-medium">
                {" "}
                สำหรับ &quot;{searchQuery}&quot;
              </span>
            )}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredCourses.map((course, index) => {
            // Convert API course data to CourseCard expected format
            const courseCardData = {
              id: parseInt(course.id) || index + 1,
              title: course.title,
              instructor: course.instructor,
              duration: course.duration_minutes ? `${Math.ceil(course.duration_minutes / 60)} ชั่วโมง` : '8 สัปดาห์',
              students: course.lessons_count * 100 || 500, // Estimated students based on lessons
              rating: 4.8, // Default rating
              price: parseFloat(course.price) || 0,
              originalPrice: parseFloat(course.price) * 1.4 || 1000, // Estimate original price
              image: "/course-placeholder.jpg",
              category: "การสอบราชการ",
              description: course.description,
              level: course.level || 'เริ่มต้น'
            };
            return (
              <CourseCard key={course.id} course={courseCardData} index={index} />
            );
          })}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              ไม่พบคอร์สที่ตรงกับการค้นหา
            </h3>
            <p className="text-gray-600 mb-6">
              ลองปรับเปลี่ยนคำค้นหาหรือตัวกรองเพื่อหาคอร์สที่เหมาะสำหรับคุณ
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilters({ category: "", level: "", priceRange: "", duration: "" });
                setFilteredCourses(courses);
              }}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-colors"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredCourses.length > 0 && filteredCourses.length >= 9 && (
          <div className="text-center mt-12">
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white hover:border-transparent transition-colors font-medium">
              โหลดคอร์สเพิ่มเติม
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Civil service exam preparation courses
const allCourses = [
  {
    id: 1,
    title: "คอร์สติวสอบข้าราชการ ปี 2567",
    instructor: "อาจารย์สมชาย ติวเตอร์",
    duration: "12 สัปดาห์",
    students: 2850,
    rating: 4.9,
    price: 3990,
    originalPrice: 5990,
    image: "/course-civil-service.jpg",
    category: "การสอบราชการ",
    level: "เริ่มต้น",
    description: "คอร์สเตรียมสอบข้าราชการครบครัน วิชาสามัญ กฎหมาย และความรู้เฉพาะตำแหน่ง"
  },
  {
    id: 2,
    title: "สอบพนักงานราชการ: เตรียมตัวสู่ความสำเร็จ",
    instructor: "ดร.วิภา กฎหมายมหาชน",
    duration: "10 สัปดาห์",
    students: 2100,
    rating: 4.8,
    price: 2990,
    originalPrice: 4490,
    image: "/course-government-employee.jpg",
    category: "พนักงานราชการ",
    level: "เริ่มต้น",
    description: "เตรียมสอบพนักงานราชการ วิชาสามัญความรู้ กฎหมาย และการบริหารงานภาครัฐ"
  },
  {
    id: 3,
    title: "ติวเข้มภาษาอังกฤษ สำหรับสอบราชการ",
    instructor: "อาจารย์แสงดาว เก่งแกรมมาร์",
    duration: "8 สัปดาห์",
    students: 1675,
    rating: 4.9,
    price: 2490,
    originalPrice: 3490,
    image: "/course-english-government.jpg",
    category: "ภาษาอังกฤษ",
    level: "กลาง",
    description: "ฝึกภาษาอังกฤษเฉพาะสำหรับสอบราชการ Grammar Reading และ Vocabulary"
  },
  {
    id: 4,
    title: "กฎหมายรัธธรรมนูญ และกฎหมายปกครอง",
    instructor: "ผศ.ดร.ประสิทธิ์ นิติกร",
    duration: "6 สัปดาห์",
    students: 890,
    rating: 4.7,
    price: 3490,
    originalPrice: 4990,
    image: "/course-constitutional-law.jpg",
    category: "กฎหมาย",
    level: "เริ่มต้น",
    description: "เรียนกฎหมายรัธธรรมนูญและกฎหมายปกครองเพื่อเตรียมสอบตำแหน่งระดับสูง"
  },
  {
    id: 5,
    title: "คณิตศาสตร์และตรรกะ สำหรับสอบราชการ",
    instructor: "อาจารย์จิรายุ เลขเด่น",
    duration: "10 สัปดาห์",
    students: 1820,
    rating: 4.8,
    price: 1990,
    originalPrice: 2990,
    image: "/course-math-logic.jpg",
    category: "คณิตศาสตร์",
    level: "เริ่มต้น",
    description: "คณิตศาสตร์และตรรกศาสตร์เบื้องต้นสำหรับสอบเข้าราชการทุกสาย"
  },
  {
    id: 6,
    title: "ติวสอบครูผู้ช่วย และข้าราชการครู",
    instructor: "ครูสุพิชฌาย์ การศึกษา",
    duration: "14 สัปดาห์",
    students: 1540,
    rating: 4.9,
    price: 4490,
    originalPrice: 5990,
    image: "/course-teacher-exam.jpg",
    category: "ครู",
    level: "เริ่มต้น",
    description: "เตรียมสอบครูผู้ช่วย วิชาการศึกษา หลักสูตรและจิตวิทยา"
  },
  {
    id: 7,
    title: "สอบตำรวจ: เตรียมสอบนายสิบตำรวจ",
    instructor: "พ.ต.ท.สมพงษ์ ตำรวจดี",
    duration: "12 สัปดาห์",
    students: 980,
    rating: 4.8,
    price: 3990,
    originalPrice: 5490,
    image: "/course-police-exam.jpg",
    category: "ตำรวจ",
    level: "กลาง",
    description: "เตรียมสอบเข้าเป็นนายสิบตำรวจ วิชาสามัญ กฎหมาย และการปฏิบัติหน้าที่"
  },
  {
    id: 8,
    title: "สอบท้องถิ่น: เทศบาล อบต. และองค์กรปกครอง",
    instructor: "นายกสมชาติ ท้องถิ่นดี",
    duration: "8 สัปดาห์",
    students: 750,
    rating: 4.7,
    price: 2990,
    originalPrice: 3990,
    image: "/course-local-government.jpg",
    category: "ท้องถิ่น",
    level: "เริ่มต้น",
    description: "เตรียมสอบเข้าทำงานองค์กรปกครองส่วนท้องถิ่น เทศบาล อบต."
  },
  {
    id: 9,
    title: "สอบรัฐวิสาหกิจ: การไฟฟ้า ปตท. กสิกรไทย",
    instructor: "อาจารย์เศรษฐศาสตร์ธุรกิจดี",
    duration: "10 สัปดาห์",
    students: 1200,
    rating: 4.9,
    price: 3490,
    originalPrice: 4990,
    image: "/course-state-enterprise.jpg",
    category: "รัฐวิสาหกิจ",
    level: "กลาง",
    description: "เตรียมสอบเข้ารัฐวิสาหกิจใหญ่ วิชาสามัญ เศรษฐศาสตร์ และความรู้เฉพาะ"
  },
  {
    id: 10,
    title: "สอบข้าราชการการเงินการคลัง",
    instructor: "ดร.เศรษฐกิจ การเงินดี",
    duration: "12 สัปดาห์",
    students: 1100,
    rating: 4.8,
    price: 4490,
    originalPrice: 5990,
    image: "/course-finance-government.jpg",
    category: "การเงินการคลัง",
    level: "กลาง",
    description: "เตรียมสอบตำแหน่งการเงินการคลัง วิชาบัญชี เศรษฐศาสตร์ และการเงินการคลัง"
  },
  {
    id: 11,
    title: "สอบนิติกรเจ้าหน้าที่",
    instructor: "ทนายสมศักดิ์ กฎหมายดี",
    duration: "16 สัปดาห์",
    students: 850,
    rating: 4.9,
    price: 5490,
    originalPrice: 7490,
    image: "/course-legal-officer.jpg",
    category: "นิติกร",
    level: "สูง",
    description: "เตรียมสอบตำแหน่งนิติกร กฎหมายแพ่ง อาญา ปกครอง และรัธธรรมนูญ"
  },
  {
    id: 12,
    title: "คอร์สรวมติวสอบราชการทุกสาย",
    instructor: "ทีม ExamPrep Pro",
    duration: "ตลอดชีพ",
    students: 3200,
    rating: 5.0,
    price: 1990,
    originalPrice: 2990,
    image: "/course-comprehensive-exam.jpg",
    category: "ครบครัน",
    level: "ทุกระดับ",
    description: "คอร์สรวมเตรียมสอบราชการทุกสาย ตั้งแต่ระดับต้นจนถึงระดับสูง อัพเดทข้อสอบล่าสุด"
  }
]; 