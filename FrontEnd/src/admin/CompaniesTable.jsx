import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Edit2, MoreHorizontal } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const CompaniesTable = () => {
    const companies  = useSelector(store => store.company?.companies || []);
    return (
        <div>
            <Table>
                <TableCaption>A List Of Your Recent Registered Company</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companies.length === 0 ? (
                    <TableRow>
                        <TableCell colSpan={4}>You Haven't Registered Any Company Yet.</TableCell>
                    </TableRow>
                ) : (
                    companies.map(company => (
                        <TableRow key={company._id}>
                            <TableCell>
                                <Avatar>
                                    <AvatarImage src='https://img.freepik.com/premium-vector/professional-creative-business-logo-design_614393-71.jpg' />
                                </Avatar>
                            </TableCell>

                            <TableCell>{company.name}</TableCell>

                            <TableCell>{company.createdAt?.split("T")[0]}</TableCell>

                            <TableCell className='text-right cursor-pointer'>
                                <Popover>
                                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                    <PopoverContent className='w-32'>
                                        <div className='flex items-center gap-2 w-full cursor-pointer'>
                                            <Edit2 className='w-4' />
                                            <span>Edit</span>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>
                    ))
                )}
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable
