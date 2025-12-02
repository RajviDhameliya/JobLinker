import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import AppliedJobTable from './AppliedJobTable'
import UpadateProfileDialog from './UpadateProfileDialog'
import { useSelector } from 'react-redux'

// const skills = ["Html", "Css", "JavaScript", "Reactjs", "Node"]

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector(store => store.auth);
  const hasResume = user?.profile?.resume;

  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-24 w-24'>
              <AvatarImage src='https://img.freepik.com/premium-vector/professional-creative-business-logo-design_614393-71.jpg' alt='Profile' />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className='text-right' variant='outline'><Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3'>
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className='my-5'>
          <h1>Skills</h1>
          <div className='flex items-center gap-1'>
            {
              user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <label className="text-md font-bold">Resume</label>
          {
            hasResume ? <a target='blank' href={`https://docs.google.com/gview?url=${user?.profile?.resume}&embedded=true`} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
          }
        </div>
      </div>
      <div className='max-w-4xl mx-auto b-white rounded-2xl'>
        <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
        {/* Application Table */}
        <AppliedJobTable />
      </div>

      <UpadateProfileDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default Profile
