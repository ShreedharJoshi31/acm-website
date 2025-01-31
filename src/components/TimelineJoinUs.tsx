import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <div className="container mx-auto px-4 bg-transparent">
            <p className="text-black text-lg leading-relaxed mb-6 text-justify mx-auto max-w-4xl px-6">
                Joining ACM is your gateway to a global community of computing professionals and students. Follow these simple steps to take your membership and become part of the dynamic Mumbai ACM Chapter:
            </p>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#1E3A8A', color: '#333333' }} // Dark blue color
                    icon={<i className="fas fa-user-plus"></i>}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-semibold text-blue-900">
                        Sign Up for ACM Membership
                    </h3>
                    <p className="text-black mt-2">
                        Visit the <a href="https://services.acm.org/public/qj/profqj/qjprof_control.cfm?promo=PWEBTOP&form_type=Professional"target='_blank' className="text-blue-500 underline">ACM Membership Page</a>.
                        Choose the membership type as "Professional," fill in your details, and complete the registration process.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#1E3A8A', color: '#333333' }} // Dark blue color
                    icon={<i className="fas fa-edit"></i>}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-semibold text-blue-900">
                    Fill out the form to unlock ACM benefits and resources!
                    </h3>
                    <p className="text-black mt-2">
                        Complete the registration by filling out the
                        <a href="https://forms.gle/p1rsXtpgBnzKF4Xn7" target='_blank' className="text-blue-500 underline"> Mumbai ACM Chapter Google Form</a>.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#1E3A8A', color: '#333333' }} // Dark blue color (changed from green)
                    icon={<i className="fas fa-thumbs-up"></i>}
                >
                    <h3 className="vertical-timeline-element-title text-xl font-semibold text-blue-900">
                        Welcome to Mumbai ACM Chapter
                    </h3>
                    <p className="text-black mt-2">
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
