import React from 'react';
import ContactLeadership from '../aboutUs/ContactLeadership';
import { BuildingIcon, GlobeIcon, LocationIcon, MailIcon, PhoneIcon } from '../../Shared/svg';
import Card from '../../Shared/Card';

const RegionalCard = () => (
    <Card >
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-(--color-blue-light) flex items-center justify-center border border-gray-800">
                <GlobeIcon fill="var(--color-icon-purple)" width={20} height={20} />
            </div>
            <div>
                <p className="text-white text-[20px] ">Regional Offices</p>
            </div>
        </div>
        <div className="space-y-4 mx-auto w-full  mt-6">
            <div className="flex items-start gap-3 bg-(--color-grey-1) p-[17px] rounded-[10px]">
                <div className="w-10 h-10 rounded-[10px] bg-(--color-purple-dimmed) flex items-center justify-center border border-gray-800">
                    <LocationIcon />
                </div>
                <div>
                    <p className="text-white text-lg ">Nursery, Hand Cross Road </p>
                    <p className="text-(--color-text-dimmed) text-lg font-medium wrap-break-word whitespace-normal">
                        United kingdom</p>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-(--color-grey-1) p-[17px] rounded-[10px]">
                <div className="w-10 h-10 rounded-[10px] bg-(--color-purple-dimmed) flex items-center justify-center border border-gray-800">
                    <LocationIcon />
                </div>
                <div>
                    <p className="text-white text-lg ">Middle East & Africa </p>

                    <p className="text-(--color-text-dimmed) text-lg font-medium">Dubai, UAE</p>
                </div>
            </div>

            <div className="flex items-center gap-3 bg-(--color-grey-1) p-[17px] rounded-[10px]">
                <div className="w-10 h-10 rounded-[10px] bg-(--color-purple-dimmed) flex items-center justify-center border border-gray-800">
                    <LocationIcon />
                </div>
                <div>
                    <p className="text-white text-lg ">Asia Pacific </p>
                    <p className="text-(--color-text-dimmed) text-lg font-medium">Islamabad, Pakistan</p>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-(--color-grey-1) p-[17px] rounded-[10px]">
                <div>
                    <p className="text-(--color-blue-bright) text-base font-medium">Global Presence</p>
                    <p className="text-(--color-text-dimmed) text-base font-medium">Operating in 9 countries with 24/7 support coverage</p>
                </div>
            </div>
        </div>
    </Card>
);

const GlobalHeadQuarters = () => (
    <Card >
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-(--color-purple-dimmed) flex items-center justify-center border border-gray-800">
                <BuildingIcon fill="var(--color-icon-purple)" width={20} height={20} />
            </div>
            <div>
                <p className="text-white text-[20px] ">Global Headquarters</p>
            </div>
        </div>
        <div className="space-y-4 mx-auto w-full  mt-6">
            <div className="flex items-start gap-3 bg-(--color-grey-1) p-[17px] rounded-[10px]">
                <div className="w-10 h-10 rounded-[10px] bg-(--color-blue-light) flex items-center justify-center border border-gray-800">
                    <LocationIcon fill="var(--color-primary-icon-blue)" width={16} height={16} />
                </div>
                <div>
                    <p className="text-white text-lg ">Extravis Limited </p>
                    <p className="text-(--color-text-dimmed) text-lg font-medium wrap-break-word whitespace-normal">
                        Nursery, Hand Cross Road England, RH13 6NX United Kingdom</p>
                </div>
            </div>
            <div className="flex items-center gap-3 bg-(--color-grey-1) p-[17px] rounded-[10px]">
                <div className="w-10 h-10 rounded-[10px] bg-(--color-blue-light) flex items-center justify-center border border-gray-800">
                    <PhoneIcon fill="var(--color-primary-icon-blue)" width={16} height={16} />
                </div>
                <div>
                    <p className="text-(--color-text-dimmed) text-lg font-medium">+44 20 8916 2155</p>
                </div>
            </div>

            <div className="flex items-center gap-3 bg-(--color-grey-1) p-[17px] rounded-[10px]">
                <div className="w-10 h-10 rounded-[10px] bg-(--color-blue-light) flex items-center justify-center border border-gray-800">
                    <MailIcon fill="var(--color-primary-icon-blue)" width={16} height={16} />
                </div>
                <div>
                    <p className="text-(--color-text-dimmed) text-lg font-medium">info@extravis.com</p>
                </div>
            </div>

            <div className="flex items-center gap-3 bg-(--color-grey-1) p-[17px] rounded-[10px]">
                <div className="w-10 h-10 rounded-[10px] bg-(--color-blue-light) flex items-center justify-center border border-gray-800">
                    <GlobeIcon fill="var(--color-primary-icon-blue)" width={16} height={16} />
                </div>
                <div>
                    <p className="text-(--color-text-dimmed) text-lg font-medium">www.extravis.co</p>
                </div>
            </div>

            <div className="flex items-center gap-3 bg-(--color-grey-1) p-[17px] rounded-[10px]">
                <div>
                    <p className="text-(--color-blue-bright) text-base font-medium">Business Hours</p>
                    <p className="text-(--color-text-dimmed) text-base font-medium">Monday - Friday   9:00 AM - 6:00 PM GMT</p>
                </div>
            </div>
        </div>
    </Card>
);

const ContactInfoGrid = () => {
    const regional = [
        { title: 'Nursery, Hand Cross Road', desc: 'Horsham, United Kingdom' },
        { title: 'Dubai, UAE', desc: 'Middle East & Africa' },
        { title: 'Islamabad, Pakistan', desc: 'Asia Pacific' }
    ];

    return (
        <div className="bg-black px-4 md:px-12 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <GlobalHeadQuarters />
                <RegionalCard items={regional} />
            </div>
        </div>
    );
};

export default ContactInfoGrid;