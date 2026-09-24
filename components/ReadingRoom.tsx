"use client";

import { useState } from "react";
import { Search, ChevronDown, X, List, ArrowRight } from "lucide-react";
import Typewriter from "./Typewriter";

interface SubBook {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  year: string;
  author: string;
  cover?: string;
}

interface Book {
  id: number;
  title: string;
  subtitle: string;
  cover: string;
  category: string;
  description: string;
  link?: string;
  year: string;
  author: string;
  subBooks?: SubBook[];
}

export default function ReadingRoom() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
   const [selectedCollection, setSelectedCollection] = useState<Book | null>(null);
  const [selectedSubBook, setSelectedSubBook] = useState<SubBook | null>(null);

  const [showCategories, setShowCategories] = useState(false);

  const books: Book[] = [
    {
      id: 1,
      title: 'Next.js Full-Stack Development',
      subtitle: 'Deep Dive into React & Next.js',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/7F530727-694E-4797-8842-01D3550DE2EE-1-2048x1152.jpg',
      category: 'Full-Stack Development',
      description: 'JS and React from scratch, along with advanced Next.js app-router & server action techniques.',
      link: 'https://eminent-glider-8c3.notion.site/93b94cbf6abf4675a28850821a725f7b?pvs=74',
      year: '2024/7/5',
      author: 'Hung-Yu Chen'
    },
    {
      id: 2,
      title: 'Python: From 0 to Data Structures and Algorithms',
      subtitle: 'Data Structures and Algorithms - Python',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/FFABE4B9-5CC1-4AC7-A144-9E9ED8E66298-1536x1536.jpg',
      category: 'Programming Languages',
      description: 'From absolute basics to advanced algorithms, a comprehensive practical guide to competitive programming with Python.',
      link: 'https://hackmd.io/@HyC-1029/rJWp7au0bg/https%3A%2F%2Fhyc.eshachem.com',
      year: '2025/2/12',
      author: 'Hung-Yu Chen'
    },
    {
      id: 3,
      title: 'C++: From 0 to Data Structures and Algorithms',
      subtitle: 'Data Structures and Algorithms',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/S__29351968_0-1-768x432.jpg',
      category: 'Programming Languages',
      description: 'Competitive programming and common algorithms, a self-guided journey aimed at achieving APCS Practical Level 4.',
      link: 'https://hackmd.io/@HyC-1029/HyCpp/%2FzETIn-1fQaejxx_-exlh3A',
      year: '2025/2/6',
      author: 'Hung-Yu Chen'
    },
    {
      id: 4,
      title: 'JavaScript - Basic',
      subtitle: 'Deep Understanding of JS and Problem Solving with JS',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/LINE_ALBUM_%E7%B4%90%E8%A5%BF%E8%98%AD%E4%B9%8B%E6%97%85-%E4%B8%8D%E7%9F%A5%E9%81%93%E6%9C%89%E6%B2%92%E6%9C%89%E4%B8%8A%E5%82%B3%E9%81%8E-%E5%B0%B1%E6%94%BE%E5%9C%A8%E9%80%99_250830_1-1-768x432.jpg',
      category: 'Programming Languages',
      description: 'It is highly recommended to master JS before learning React.',
      link: 'https://eminent-glider-8c3.notion.site/JavaScript-Basic-12a9def5443d80488b9cf562ef3a3ccf?pvs=74',
      year: '2024/10/25',
      author: 'Hung-Yu Chen'
    },
    {
      id: 5,
      title: 'Swift/SpringBoot',
      subtitle: 'Swift/SpringBoot Course Lecture Notes',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/S__29351976-768x432.jpg',
      category: 'Backend Development',
      description: 'Simple iOS app development languages and a basic tutorial on the powerful Spring Boot backend framework.',
      link: 'https://eminent-glider-8c3.notion.site/2c19def5443d8008ab47c963b63ec8a2?pvs=74',
      year: '2025/12/6',
      author: 'Hung-Yu Chen'
    },
    {
      id: 6,
      title: 'Django/Flask/MySQL',
      subtitle: 'Django/Flask/MySQL Course Lecture Notes',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/S__29351972_0-1-768x1365.jpg',
      category: 'Backend Development',
      description: 'For rapid prototyping and demos, a powerful framework and database are essential.',
      link: 'https://eminent-glider-8c3.notion.site/Django-Flask-MySQL-2b39def5443d80b9acfad70961d88589?pvs=74',
      year: '2025/6/15',
      author: 'Hung-Yu Chen'
    },
    {
      id: 7,
      title: 'JavaScript - HTML',
      subtitle: 'Specific JS Syntax and Applications in HTML',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/S__29351964_0-1-768x768.jpg',
      category: 'Frontend Development',
      description: 'Understanding how JS applies to HTML will help you better grasp how React works under the hood.',
      link: 'https://eminent-glider-8c3.notion.site/JavaScript-html-1649def5443d80c49f0ffd353e644602?pvs=74',
      year: '2024/12/22',
      author: 'Hung-Yu Chen'
    },
    {
      id: 8,
      title: 'High School Mathematics',
      subtitle: 'Digital Math A practice tests.',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/6D4640C2-5207-495E-A3F0-19CFA80B796E-768x768.jpg',
      category: 'Other Resources',
      description: 'Digital copies and handwritten detailed solutions for High School Math A practice tests.',
      link: 'https://eminent-glider-8c3.notion.site/3cb9def5443d804882e3e4e125207995?source=copy_link',
      year: '2026/8/29',
      author: 'Hung-Yu Chen'
    },
    {
      id: 9,
      title: 'Project Management & System Planning',
      subtitle: '',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/09/S__38961155.jpg',
      category: 'System & Management',
      description: 'Compiles my research notes and key findings from the literature and academic papers I have reviewed, focusing on Agile and the process from system analysis to software development.',
      year: '2026/8',
      author: 'Hung-Yu Chen',
      subBooks: [
        {
          id: 'sub-5',
          title: '系統分析與開發實踐手冊',
          subtitle: 'Handbook of Systems Analysis and Development Practices',
          description: 'This manual is intended for everyday software development, project implementation, and Hackathons, particularly in situations where system analysis and development must be completed rapidly within a limited timeframe. It provides concise, practical, and easily accessible content for quick reference and real-world application.',
          link: 'https://drive.google.com/file/d/1Ydo1BMm8vPtdD1-jp6bjrRC56NWs0Y8r/view',
          year: '2026/9/7',
          author: 'Hung-Yu Chen'
        },
        {
          id: 'sub-4',
          title: '五大敏捷因素:團隊雷達',
          subtitle: 'Evidence-Based Guidelines for Team Self-Organization and Reflection',
          description: 'This radar tool draws on the contemporary psychological framework of the “Big Five Personality Traits” and distills the mechanisms that influence the self-organization and resilience of Agile teams into five measurable core dimensions',
          link: 'https://drive.google.com/file/d/1K9_WcciCIQAuyksGoE1Tao56bPm8vMVZ/view',
          year: '2026/9/6',
          author: 'Hung-Yu Chen'
        },
        {
          id: 'sub-1',
          title: 'Scrum 敏捷框架入門',
          subtitle: 'Introduction to the Scrum Agile Framework',
          description: 'Scrum is the most popular and widely adopted incremental product development framework in today’s Agile methodology.',
          link: 'https://drive.google.com/file/d/1RWQWrpiI6vXqE8I12FObQE14uRpERt_P/view',
          year: '2026/9/4',
          author: 'Hung-Yu Chen'
        },
        {
          id: 'sub-2',
          title: '敏捷基礎導讀與實戰情境手冊',
          subtitle: 'Agile Foundation Guide and Practical Scenarios Handbook',
          description: 'Agile strongly advocates for cross-functional and collaborative teams, regarding open communication, teamwork, adaptability, and trust as the cornerstones of effective team operation.',
          link: 'https://drive.google.com/file/d/1du2aWK0tBSzIASqY3HpUZiynUBzqkWT4/view',
          year: '2026/9/4',
          author: 'Hung-Yu Chen'
        },
        {
          id: 'sub-3',
          title: 'Scrum@Scale (SaS) 框架實戰導讀指南',
          subtitle: 'A Practical Guide to Scrum@Scale (SaS) Framework Implementation',
          description: 'Establishing the Organizational Design, Dual-Track Mechanism, and Principles of Practice for an Agile Operating System (AOS).',
          link: 'https://drive.google.com/file/d/1UE53ii9eYO5G46RKMSzeKEEZHqO7D1DM/view',
          year: '2026/3/20',
          author: 'Hung-Yu Chen'
        },
        
        
      ]
    }
  ];

  const categories = ['All', ...Array.from(new Set(books.map(book => book.category)))];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const texts = [
    "Hello there! What did you have for lunch today?",
    "I'm Hung-Yu Chen, and welcome to my lecture notes and e-book reading room!",
    "I hope this repository helps you level up on your learning journey!",
    "If you have any questions, feel free to reach out and ask!"
  ];

  const handleBookClick = (book: Book) => {
    if (book.subBooks && book.subBooks.length > 0) {
      setSelectedCollection(book);
    } else {
      setSelectedBook(book);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
            <a href='https://hyc.eshachem.com/'>
                <img src="/Hy.C.png" alt="logo" width={90} /> 
            </a>
          
            <h1>Reading Room</h1>
            <Typewriter texts={texts} />
        </div>
      </header>

      <div className="container">
        <div className="controls">
          <div className="search-section">
            <div className="search-bar">
              <Search size={18} strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search by title, author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="category-dropdown">
              <button 
                className="dropdown-btn"
                onClick={() => setShowCategories(!showCategories)}
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={18} strokeWidth={1.5} />
              </button>
              
              {showCategories && (
                <div className="dropdown-menu">
                  {categories.map(category => (
                    <button
                      key={category}
                      className={`dropdown-item ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setShowCategories(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="books-grid">
          {filteredBooks.map(book => (
            <div 
              key={book.id} 
              className="book-item"
              onClick={() => handleBookClick(book)}
            >
              <div className="book-cover">
                <img src={book.cover} alt={book.title} />
              </div>
              <div className="book-info">
                <p className="book-category">{book.category}</p>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-subtitle">{book.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="no-results">
            <p>No relevant books found.</p>
          </div>
        )}
      </div>

      {/* 一般書籍的 Modal 詳情 */}
      {selectedBook && (
        <div className="modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedBook(null)}>
              <X size={24} strokeWidth={1.5} />
            </button>
            <div className="modal-body">
              <div className="modal-cover">
                <img src={selectedBook.cover} alt={selectedBook.title} />
              </div>
              <div className="modal-details">
                <p className="modal-category">{selectedBook.category}</p>
                <h2 className="modal-title">{selectedBook.title}</h2>
                <p className="modal-subtitle">{selectedBook.subtitle}</p>
                <div className="modal-meta">
                  <span>Author: {selectedBook.author}</span>
                  <span>Start year: {selectedBook.year}</span>
                </div>
                <p className="modal-description" style={{ whiteSpace: "pre-line" }}>{selectedBook.description}</p>
                {selectedBook.link && (
                  <a 
                    href={selectedBook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-link"
                  >
                    Start Reading
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 專案管理與系統分析：點擊後展開的「條列式書籍列表」 Modal */}
      {selectedCollection && (
        <div className="modal-overlay" onClick={() => setSelectedCollection(null)}>
          <div className="modal-content collection-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '700px' }}>
            <button className="close-btn" onClick={() => setSelectedCollection(null)}>
              <X size={24} strokeWidth={1.5} />
            </button>
            <div className="modal-body" style={{ flexDirection: 'column', gap: '16px' }}>
              <div>
                <p className="modal-category">{selectedCollection.category}</p>
                <h2 className="modal-title" style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{selectedCollection.title}</h2>
                <p className="modal-subtitle">{selectedCollection.subtitle}</p>
                <p className="modal-description" style={{ fontSize: '0.95rem' }}>{selectedCollection.description}</p>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '4px 0' }} />

              <h3 style={{ fontSize: '1.1rem', color: '#333', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <List size={18} /> Book List
              </h3>

              <div className="sub-books-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '279px', overflowY: 'auto', paddingRight: '4px' }}>
                {selectedCollection.subBooks?.map((sub) => (
                  <div 
                    key={sub.id} 
                    className="sub-item"
                    onClick={() => setSelectedSubBook(sub)}
                  >
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '1rem', color: '#111', marginBottom: '2px' }}>{sub.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>{sub.subtitle}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a 
                        href={sub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-link"
                      >
                        Start Reading <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 單一子書籍的詳細資訊 Modal（點擊 Details 時觸發） */}
      {selectedSubBook && (
        <div className="modal-overlay" onClick={() => setSelectedSubBook(null)} style={{ zIndex: 1100 }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedSubBook(null)}>
              <X size={24} strokeWidth={1.5} />
            </button>
            <div className="modal-body" style={{ flexDirection: 'column' }}>
              <div className="modal-details">
                <h2 className="modal-title">{selectedSubBook.title}</h2>
                <p className="modal-subtitle">{selectedSubBook.subtitle}</p>
                <div className="modal-meta">
                  <span>Author: {selectedSubBook.author}</span>
                  <span>Date: {selectedSubBook.year}</span>
                </div>
                <p className="modal-description" style={{ whiteSpace: "pre-line", marginTop: '12px' }}>{selectedSubBook.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>2025 Reading Room | Continuously Updated ©Hy.C CC BY-NC-SA 4.0
Non-Commercial Use Only | Attribution Required | ShareAlike under Same Terms</p>
      </footer>
    </div>
  );
};

