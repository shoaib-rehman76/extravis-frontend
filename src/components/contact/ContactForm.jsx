import React, { useState } from 'react';
import CustomButton from '../../Shared/CustomButton';
import Card from '../../Shared/Card';
import Input from '../../Shared/Input';
import Radio from '../../Shared/Radio';
import Checkbox from '../../Shared/Checkbox';
import GradientButton from '../../Shared/GradientButton';

const ContactForm = () => {
    const [form, setForm] = useState({
        fullName: '',
        jobTitle: '',
        companyName: '',
        email: '',
        phone: '',
        country: '',
        industry: '',
        companySize: '',
        primaryInterest: [],
        projectTypes: [],
        timeline: '',
        budgetRange: '',
        currentChallenges: '',
        additionalRequirements: '',
        contactMethod: 'email',
        receiveCommunications: false
    });

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState(null);

    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const toggleArrayValue = (key, value) => {
        setForm(prev => {
            const set = new Set(prev[key] || []);
            if (set.has(value)) set.delete(value); else set.add(value);
            return { ...prev, [key]: Array.from(set) };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage(null);
        try {
            // Example submission - replace with real endpoint
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            // setMessage({ type: 'success', text: 'Thanks — we received your request and will be in touch shortly.' });
            setForm({
                fullName: '', jobTitle: '', companyName: '', email: '', phone: '', country: '', industry: '', companySize: '',
                primaryInterest: [], projectTypes: [], timeline: '', budgetRange: '', currentChallenges: '', additionalRequirements: '', contactMethod: 'email', receiveCommunications: false
            });
        } catch (err) {
            setMessage({ type: 'error', text: 'Submission failed. Please try again later.' });
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Card>
            <h3 className="text-purple-400 text-2xl font-bold mb-4">Tell Us About Your Requirements</h3>
            <p className="text-(--color-text-dimmed) mb-6">Schedule a personalized demo to explore how our solution can streamline your needs.</p>

            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>

                <h4 className="text-white text-xl font-semibold">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input name="fullName" placeholder="Full name" value={form.fullName} onChange={(e) => handleChange('fullName', e.target.value)} required />
                    <Input name="jobTitle" placeholder="Job title" value={form.jobTitle} onChange={(e) => handleChange('jobTitle', e.target.value)} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input name="companyName" placeholder="Company name" value={form.companyName} onChange={(e) => handleChange('companyName', e.target.value)} />
                    <Input name="email" placeholder="Email address" type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input name="phone" placeholder="Phone number" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                    <Input name="country" placeholder="Country" value={form.country} onChange={(e) => handleChange('country', e.target.value)} />
                </div>

                <h4 className="text-white text-xl font-semibold mt-4">Company Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input as="select" name="industry" options={[{ value: '', label: 'Select industry' }, { value: 'telecom', label: 'Telecom' }, { value: 'financial', label: 'Financial' }]} value={form.industry} onChange={(e) => handleChange('industry', e.target.value)} />
                    <Input as="select" name="companySize" options={[{ value: '', label: 'Select company size' }, { value: '1-50', label: '1-50' }, { value: '51-250', label: '51-250' }, { value: '250+', label: '250+' }]} value={form.companySize} onChange={(e) => handleChange('companySize', e.target.value)} />
                </div>

                <h4 className="text-white text-xl font-semibold mt-4">Project Information</h4>
                <p className="text-(--color-text-dimmed)">Primary interest</p>
                <div className="flex gap-3 flex-wrap">
                    {['MonetX', 'SupportX', 'GreenX', 'MapX', 'Professional Services', 'Multiple Solutions', 'Not Sure'].map(item => (
                        <div className='rounded-lg min-w-[175px] flex items-center justify-center px-1 py-4 border border-(--color-input-border)'>
                            <Checkbox
                                name="receive" checked={form.primaryInterest.includes(item)} onChange={(checked) => toggleArrayValue('primaryInterest', item)} label={item}
                            />
                        </div>
                    ))}
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    <Input as="select" name="timeline" options={[{ value: '', label: 'Select timeline' }, { value: 'now', label: 'Immediately' }, { value: '3m', label: '1-3 months' }, { value: '6m', label: '3-6 months' }]} value={form.timeline} onChange={(e) => handleChange('timeline', e.target.value)} />
                    <Input as="select" name="budgetRange" options={[{ value: '', label: 'Select budget range' }, { value: '<10k', label: '< $10k' }, { value: '10-50k', label: '$10k - $50k' }, { value: '50k+', label: '$50k+' }]} value={form.budgetRange} onChange={(e) => handleChange('budgetRange', e.target.value)} />
                </div>

                <Input as="textarea" name="currentChallenges" placeholder="Current challenges" rows={4} value={form.currentChallenges} onChange={(e) => handleChange('currentChallenges', e.target.value)} />
                <Input as="textarea" name="additionalRequirements" placeholder="Additional requirements" rows={4} value={form.additionalRequirements} onChange={(e) => handleChange('additionalRequirements', e.target.value)} />

                <h4 className="text-white text-xl font-semibold mt-4">Communication Preferences</h4>
                <Radio name="contactMethod" options={[{ value: 'email', label: 'Email' }, { value: 'phone', label: 'Phone' }, { value: 'video', label: 'Video call' }]} value={form.contactMethod} onChange={(val) => handleChange('contactMethod', val)} orientation="vertical" />

                <div className="mt-4">
                    {message && <p className={`${message.type === 'success' ? 'text-green-400' : 'text-red-400'} mb-3`}>{message.text}</p>}
                    <GradientButton type="submit" className="w-full" disabled={submitting}>{submitting ? 'Submitting...' : 'Contact US'}</GradientButton>
                </div>

            </form>
        </Card>
    );
};

export default ContactForm;