"use client";

import { useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import Typewriter from "./Typewriter";

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
}

export default function ReadingRoom() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const [showCategories, setShowCategories] = useState(false);

  const books: Book[] = [
    {
      id: 1,
      title: 'Next.js Development',
      subtitle: 'Next.js 開發',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/7F530727-694E-4797-8842-01D3550DE2EE-1-2048x1152.jpg',
      category: 'Next.js',
      description: 'Start from React fundamentals and work through the Basic, Pro and Plus chapters, then add TypeScript and Zod for type-safe, validated code. The book finishes with the Next.js App Router so you can build and ship full-stack web apps. Written for beginners and students who know a little HTML and want a guided path into modern web development.',
      link: 'https://eminent-glider-8c3.notion.site/Next-js-93b94cbf6abf4675a28850821a725f7b',
      year: '2024/7/5',
      author: 'Hung-Yu Chen'
    },
    {
      id: 2,
      title: 'Python: From 0 to Data Structures and Algorithms',
      subtitle: 'Data Structures and Algorithms - Python',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/FFABE4B9-5CC1-4AC7-A144-9E9ED8E66298-1536x1536.jpg',
      category: 'Python',
      description: 'Learn Python from your very first line of code all the way to core data structures and algorithms. Each topic pairs clear explanations with practice problems in a competitive-programming style. Ideal for beginners and students who want a solid problem-solving foundation.',
      link: 'https://hackmd.io/@HyC-1029/rJWp7au0bg/https%3A%2F%2Fhyc.eshachem.com',
      year: '2025/2/12',
      author: 'Hung-Yu Chen'
    },
    {
      id: 3,
      title: 'C++: From 0 to Data Structures and Algorithms',
      subtitle: 'Data Structures and Algorithms',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/S__29351968_0-1-768x432.jpg',
      category: 'C++',
      description: 'A self-guided journey from C++ basics to the data structures and algorithms used in competitive programming. The material is built around reaching APCS Practical Level 4, with worked problems along the way. Best suited for high school and university students preparing for APCS or programming contests.',
      link: 'https://hackmd.io/@HyC-1029/HyCpp/%2FzETIn-1fQaejxx_-exlh3A',
      year: '2025/2/6',
      author: 'Hung-Yu Chen'
    },
    {
      id: 4,
      title: 'Backend & Databases',
      subtitle: '後端與資料庫',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/S__29351972_0-1-768x1365.jpg',
      category: 'Backend Dev',
      description: 'Learn how the server side of an application works, starting with SQL and MySQL database design. You will then build web services with Flask, Django, Spring Boot and PHP, and see how each framework approaches the same problems. A practical next step for students who can write basic code and want to build complete, data-driven projects.',
      link: 'https://eminent-glider-8c3.notion.site/Flask-Django-SQL-2b39def5443d80b9acfad70961d88589',
      year: '2025/6/15',
      author: 'Hung-Yu Chen'
    },
    {
      id: 5,
      title: 'App Development',
      subtitle: 'App 開發',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/05/S__29351976-768x432.jpg',
      category: 'App Dev',
      description: 'Build mobile apps that run on real devices, starting with Swift for native iOS and React Native with Expo for cross-platform apps. A Flutter section is coming soon. Aimed at beginners and students who want to turn their own ideas into working phone apps.',
      link: 'https://eminent-glider-8c3.notion.site/App-3f69def5443d8110b789fd462c44d6d3',
      year: '2025/12/6',
      author: 'Hung-Yu Chen'
    },
    {
      id: 6,
      title: 'Project Management & Team Collaboration',
      subtitle: '專案管理與團隊協作',
      cover: 'https://hyc.eshachem.com/wp-content/uploads/2026/09/S__38961155.jpg',
      category: 'Management',
      description: 'Learn how software teams plan, build and deliver projects together. The book covers PMP project management fundamentals, GitLab workflows, software testing, the Definition of Done and the Scrum framework. Written for students preparing for team projects, hackathons or their first engineering role.',
      link: 'https://eminent-glider-8c3.notion.site/Swift-PM-SpringBoot-2c19def5443d8008ab47c963b63ec8a2',
      year: '2026/8',
      author: 'Hung-Yu Chen'
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
              onClick={() => setSelectedBook(book)}
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

      {/* 書籍的 Modal 詳情 */}
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

      <footer className="footer">
        <p>2025 Reading Room | Continuously Updated ©Hy.C CC BY-NC-SA 4.0
Non-Commercial Use Only | Attribution Required | ShareAlike under Same Terms</p>
      </footer>
    </div>
  );
};

