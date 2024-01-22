import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // const [totalstudents, setTotalstudents] = useState(20)
  const [data, setData] = useState([{}])

  const addStudent = () => {
    setData( student => [...student, {
      Name : "Pjoy", 
      RegNo : "202100151"
    }]) 
  }
 
  useEffect(() => {
    addStudent();
    console.log(data);
  }, [])

  useEffect(() => {

  }, data)

  return (
    <>
      <div className="flex bg-gray-100 h-screen">
        <div className="flex-grow text-gray-800">
          <main className="p-6 sm:p-10 space-y-6  mb-12">
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className="mr-6">
                <h1 className="text-4xl font-semibold mb-2">Attendo - The Attendence Tracker</h1>
                <h2 className="text-gray-600 ml-0.5">Team Web Dev - GDSC SMIT - Batch 2022-2023</h2>
              </div>
            </div>
            <section className="grid md:grid-cols-3 xl:grid-cols-3 gap-6">
              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">62</span>
                  <span className="block text-gray-500">Students Present</span>
                </div>
              </div>

              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">12</span>
                  <span className="block text-gray-500">Students Absent</span>
                </div>
              </div>

              <div className="flex items-center p-8 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <span className="block text-2xl font-bold">30 seconds</span>
                  <span className="block text-gray-500">Time Spent in Class</span>
                </div>
              </div>

            </section>
            <section className="grid md:grid-cols-3 xl:grid-cols-3 xl:grid-rows-2 xl:grid-flow-col gap-6">
              <div className="flex flex-col md:col-span-1 md:row-span-2 bg-white shadow rounded-lg">
                <div className="px-6 py-5 font-semibold border-b border-gray-100">Attendence Chart</div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                </div>
              </div>
              <div className="row-span-2 col-span-2 bg-white shadow rounded-lg">
                <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                  <span>Attendence List</span>
                  <span> Registration Number</span>
                </div>
                <div className="overflow-y-auto">
                  <ul className="p-6 space-y-6">
                    <li className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Annette Watson profile picture" />
                      </div>
                      <span className="text-gray-600">Bisleri Pandey</span>
                      <span className="ml-auto font-semibold">202100123</span>
                    </li>

                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}

export default App