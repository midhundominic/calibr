'use client'
import Image from 'next/image'
import Button from './ui/Button'
import { motion } from 'framer-motion'

const features = [
    {
      title: 'Pre-made templates',
      description:
        'Odio pellentesque diam volutpat commodo sed egestas egestasolil fringilla phasellus',
      icon:
        'https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/61819692ed2a63372e88c5d1_feature-icon-01-applay-x-template.svg',
    },
    {
      title: 'Drag-and-drop editor',
      description:
        'Odio pellentesque diam volutpat commodo sed egestas egestasolil fringilla phasellus',
      icon:
        'https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/61819691195773b863ef4212_feature-icon-02-applay-x-template.svg',
    },
    {
      title: 'Delivery optimization',
      description:
        'Odio pellentesque diam volutpat commodo sed egestas egestasolil fringilla phasellus',
      icon:
        'https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/618196911a9553472e78f563_feature-icon-03-applay-x-template.svg',
    },
    {
      title: 'Easy A/B testing',
      description:
        'Odio pellentesque diam volutpat commodo sed egestas egestasolil fringilla phasellus',
      icon:
        'https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/618196916bc70ac9b9dde336_feature-icon-04-applay-x-template.svg',
    },
    {
      title: 'Granular reports',
      description:
        'Odio pellentesque diam volutpat commodo sed egestas egestasolil fringilla phasellus',
      icon:
        'https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/6181969186fc8b281ee853ae_feature-icon-05-applay-x-template.svg',
    },
    {
      title: 'Multiple users',
      description:
        'Odio pellentesque diam volutpat commodo sed egestas egestasolil fringilla phasellus',
      icon:
        'https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/61819691edcb1cea8c60dc3b_feature-icon-06-applay-x-template.svg',
    },
  ]
  
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut' as const },
  viewport: { once: true, amount: 0.2 },
};

export default function FeaturesSection() {
  return (
    <motion.section
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      viewport={fadeUp.viewport}
      className="py-20 px-4 text-center bg-white"
    >
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={fadeUp.transition}
        viewport={fadeUp.viewport}
        className="max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F086A]">
          Simple and useful features
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit fermentum sit
          pulvinar sed adipiscing ullamcorper quam at purus.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.13,
            },
          },
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' as const },
              },
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,80,180,0.10)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer"
          >
            <div className="w-18 h-18 mb-4 mx-auto rounded-xl flex items-center justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className='rounded-xl'
              />
            </div>
            <h3 className="text-xl font-semibold text-[#0F086A] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={fadeUp.transition}
        viewport={fadeUp.viewport}
        className="mt-12 flex justify-center gap-4 flex-wrap"
      >
        <Button href="/"/>
        <a
          href="/features"
          className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-[#0F086A] hover:text-[#4F46E5] transition"
        >
          Browse features
        </a>
      </motion.div>
    </motion.section>
  )
}
