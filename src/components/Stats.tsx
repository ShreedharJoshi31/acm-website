import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Award, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const stats = [
  { 
    icon: Users,
    label: 'Total Reach', 
    value: 5000,
    suffix: '+',
    color: 'from-blue-500 to-blue-600'
  },
  { 
    icon: Users,
    label: 'Active Members', 
    value: 200,
    suffix: '+',
    color: 'from-purple-500 to-purple-600'
  },
  { 
    icon: Calendar,
    label: 'Events Conducted', 
    value: 50,
    suffix: '+',
    color: 'from-indigo-500 to-indigo-600'
  },
  { 
    icon: Clock,
    label: 'Months of Experience', 
    value: 36,
    suffix: '+',
    color: 'from-cyan-500 to-cyan-600'
  },
];

export const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Our Impact in Numbers
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br bg-gray-800/50 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${stat.color} p-3`}>
                  <stat.icon className="w-full h-full text-white" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-4xl font-bold text-white mb-2"
                >
                  {isInView ? stat.value.toLocaleString() : '0'}
                  {stat.suffix}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}