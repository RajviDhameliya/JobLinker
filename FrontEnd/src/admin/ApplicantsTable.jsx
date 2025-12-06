import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MoreHorizontal } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllApplicants } from '@/redux/applicationSlice';
import { toast } from 'sonner';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import axios from 'axios';

const shortlistingOptions = [
    { key: 'accepted', label: 'Accept' },
    { key: 'rejected', label: 'Reject' }
];

const ApplicantsTable = () => {
    const { applicants } = useSelector(store => store.application);
    const dispatch = useDispatch();

    const statusHandler = async (status, id) => {
        console.log('called');
        try {
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status }, {
                withCredentials: true
            });
            console.log(res);
            if (res.data.success) {
                toast.success(res.data.message);
                // refetch applicants for this job to reflect status change
                try {
                    const jobId = applicants?._id;
                    if (jobId) {
                        const jobRes = await axios.get(`${APPLICATION_API_END_POINT}/${jobId}/applicants`, { withCredentials: true });
                        dispatch(setAllApplicants(jobRes.data.job));
                    }
                } catch (e) {
                    console.log('Error refetching applicants', e);
                }
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent applied user</TableCaption>
                <TableHeader>
                    <TableRow>
                            <TableHead>FullName</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Resume</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        applicants && applicants?.applications?.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item?.applicant?.fullname}</TableCell>
                                <TableCell>{item?.applicant?.email}</TableCell>
                                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                                <TableCell >
                                    {
                                        item.applicant?.profile?.resume ? (
                                            (() => {
                                                const url = item?.applicant?.profile?.resume;
                                                const clean = (url.split('?')[0] || '').toLowerCase();
                                                const viewer = clean.endsWith('.pdf') ? url : `https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`;
                                                return <a className="text-blue-600 cursor-pointer" href={viewer} target="_blank" rel="noopener noreferrer">{item?.applicant?.profile?.resumeOriginalName}</a>
                                            })()
                                        ) : <span>NA</span>
                                    }
                                </TableCell>
                                <TableCell>
                                    {
                                        item?.status === 'accepted' ? <span className='text-green-700 font-medium'>Accepted</span> : item?.status === 'rejected' ? <span className='text-red-600 font-medium'>Rejected</span> : <span className='text-gray-600'>Pending</span>
                                    }
                                </TableCell>
                                <TableCell>{(item?.createdAt || '').split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            {
                                                shortlistingOptions.map((opt) => {
                                                    const disabled = item?.status === opt.key;
                                                    return (
                                                        <div
                                                            key={opt.key}
                                                            onClick={() => !disabled && statusHandler(opt.key, item?._id)}
                                                            className={`flex w-fit items-center my-2 ${disabled ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}`}>
                                                            <span>{opt.label}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>

            </Table>
        </div>
    )
}

export default ApplicantsTable