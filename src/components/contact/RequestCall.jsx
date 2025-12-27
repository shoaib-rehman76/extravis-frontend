import { Link } from 'react-router-dom';
import Card from '../../Shared/Card';
import { CheckIcon } from '../../Shared/svg';

const RequestCall = () => {
    return (
        <Card className='lg:col-span-1 lg:sticky lg:top-24'>
            <div className="max-w-prose">
                <h3 className="text-white  font-bold text-5xl mb-4">Request A Call
                    <span className="block text-purple-400  font-bold text-5xl mt-2">With Our Experts</span>
                </h3>
                <p className="text-(--color-text-dimmed) mb-6">Request a call with our experts, and let's bring your vision to life! Our team is ready to assist you in creating an unforgettable experience tailored to your needs.</p>
                <p className='mb-3 text-white font-bold'>In the consultation:</p>
                {
                    ["We jointly determine your company's requirements", "We present you with the appropriate Extravis features", "We clarify your questions and discuss possible next steps"].map((x, i) => (
                        <div className="flex gap-3 mb-5" key={i}>
                            <CheckIcon />
                            <p className='text-(--color-text-dimmed)'>{x}</p>
                        </div>
                    ))
                }


                <div className="flex flex-wrap items-center gap-3">
                    {
                        [1, 2, 3, 4].map((x) => (
                            <img
                                key={x}
                                src={`/assets/aboutus/certification${x}.png`}
                                alt={`cert-${x}`}
                                className="w-14 md:w-20 h-10 md:h-12 object-contain bg-transparent rounded"
                                style={{ display: 'block' }}
                            />
                        ))
                    }
                </div>
            </div>

        </Card>
    );
};

export default RequestCall;