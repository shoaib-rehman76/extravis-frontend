import React from 'react';
import { BuildingIcon, CommunicationIcon, MailIcon, GlobeIcon, PhoneIcon } from '../../Shared/svg';
import SectionTitle from '../../Shared/SectionTitle';

const ContactLeadership = () => {
    return (
        <>
            <SectionTitle title="Contact Our" subtitle="Leadership" >
                <p className='text-(--color-text-dimmed)'>Connect with Our Team</p>
            </SectionTitle>
            <div className="max-w-7xl mx-auto  py-12">
                <div className="mx-auto ">
                    <div className="bg-[#0f0f0f]/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">

                        <div className="space-y-4 mx-auto w-full md:w-max">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#0b1220] flex items-center justify-center border border-gray-800">
                                    <BuildingIcon fill="var(--color-primary-icon-blue)" width={24} height={24} />
                                </div>
                                <div>
                                    <p className="text-(--color-light-blue) text-lg ">Headquarters</p>
                                    <p className="text-(--color-text-dimmed) text-lg font-medium break-words whitespace-normal">Nursery, Hand Cross Road Plummers Plain Horsham, England RH13 6NX United Kingdom</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#0b1220] flex items-center justify-center border border-gray-800">
                                    <PhoneIcon />
                                </div>
                                <div>
                                    <p className="text-(--color-light-blue) text-lg">Phone</p>
                                    <p className="text-(--color-text-dimmed) text-lg font-medium">+44 20 8916 2155</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#0b1220] flex items-center justify-center border border-gray-800">
                                    <MailIcon />
                                </div>
                                <div>
                                    <p className="text-(--color-light-blue) text-lg">Email</p>
                                    <p className="text-(--color-text-dimmed) text-lg font-medium">info@extravis.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-[#0b1220] flex items-center justify-center border border-gray-800">
                                    <GlobeIcon />
                                </div>
                                <div>
                                    <p className="text-(--color-light-blue) text-lg">Website</p>
                                    <p className="text-(--color-text-dimmed) text-lg font-medium">www.extravis.co</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactLeadership;
