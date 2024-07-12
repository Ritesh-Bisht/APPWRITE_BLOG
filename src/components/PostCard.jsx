import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4 h-64 flex flex-col'>
        <div className='w-full justify-center mb-4 flex-grow overflow-hidden'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title}
            className='rounded-xl w-full h-32 object-contain' 
          />
        </div>
        <h2 className='text-xl font-bold overflow-hidden text-ellipsis'>
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;

