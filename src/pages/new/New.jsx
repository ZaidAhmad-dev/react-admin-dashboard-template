import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './new.css';
import { useState } from 'react';

const New = ({inputs, title}) => {
	const [file, setFile] = useState(null);
	console.log(file);
  return (
	<div className='new'>
		<Sidebar/>
	  	<div className="newContainer">
			<Navbar/>
			<div className="top">
				<h1>{title}</h1>
			</div>
			<div className="bottom">
				<div className="left">
					<img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="img-picker" />
				</div>
				<div className="right">
					<form action="#">
						<div className="form-input">
							<label htmlFor="file">Image: <DriveFolderUploadIcon className='icon'/></label>
							<input type="file" id="file" onChange={(e)=> {setFile(e.target.files[0])}} style={{display: "none"}}/>
						</div>
						{inputs.map((input, index) => 
							<div className="form-input" key={index}>
								<label htmlFor={input.type}>{input.label}</label>
								<input type={input.type} id={input.type} placeholder={input.placeholder}/>
							</div>
						)}
						
						
						<button>Send</button>
					</form>
				</div>
			</div>
	  	</div>
	</div>
  )
}

export default New