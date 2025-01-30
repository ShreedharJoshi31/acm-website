import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <p className="text-3xl font-bold text-center text-justify text-white mb-10 ml-20 mr-20">Joining ACM is your gateway to a global community
                of computing professionals and students. Follow these simple steps to take your membership and become part of the dynamic Mumbai ACM Chapter:</p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Step 1"
                    iconStyle={{ background: '#3498db', color: '#fff' }}
                    icon={<i className="fas fa-user-plus"></i>}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-semibold text-blue-900">
                        Sign Up for ACM Membership
                    </h3>
                    <p className="text-gray-700 mt-2">
                        Visit the <a href="https://services.acm.org/public/qj/profqj/qjprof_control.cfm?promo=PWEBTOP&form_type=Professional" className="text-blue-500 underline">ACM Membership Page</a>.
                        Choose the membership type as "Professional," fill in your details, and complete the registration process.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Step 2"
                    iconStyle={{ background: '#3498db', color: '#fff' }}
                    icon={<i className="fas fa-edit"></i>}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-semibold text-blue-900">
                        Fill Google Form
                    </h3>
                    <p className="text-gray-700 mt-2">
                        Complete the registration by filling out the
                        <a href="YOUR_GOOGLE_FORM_LINK" className="text-blue-500 underline"> Mumbai ACM Chapter Google Form</a>.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Step 3"
                    iconStyle={{ background: '#2ecc71', color: '#fff' }}
                    icon={<i className="fas fa-thumbs-up"></i>}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-semibold text-blue-900">
                        Welcome to Mumbai ACM Chapter
                    </h3>
                    <p className="text-gray-700 mt-2">
                        Congratulations on becoming a member! We are thrilled to have you join the Mumbai ACM Chapter.
                        Stay tuned for upcoming events, opportunities, and networking sessions.
                    </p>
                </VerticalTimelineElement>
                {/* Add more steps as needed */}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
