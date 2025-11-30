import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, rating = 5, image }) => {
  return (
    <div className="bg-white rounded-3xl p-8 border border-[#E8E8E8] h-full flex flex-col">
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#E8B86D] text-[#E8B86D]" />
        ))}
      </div>
      
      <blockquote className="text-[#2D2D2D] leading-relaxed flex-grow text-lg font-light italic">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#E8E8E8]">
        {image ? (
          <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B9E8B]/30 to-[#5B8DB8]/30 flex items-center justify-center">
            <span className="text-[#2D2D2D] font-medium">{author[0]}</span>
          </div>
        )}
        <div>
          <p className="font-medium text-[#2D2D2D]">{author}</p>
          <p className="text-sm text-[#5A5A5A]">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;