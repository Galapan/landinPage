interface Feature {
    title:string;
    description:string;
    iconUrl:string;
}

const features:Feature[] = [
    {
        title:"Access your files, anywhere",
        description:"The ability to move files between devices is essential in today's world.",
        iconUrl:"../images/icon-access-anywhere.svg"
    },
    {
        title:"Security",
        description:"The ability to move files between devices is essential in today's world.",
        iconUrl:"../images/icon-security.svg"
    },
    {
        title:"Real-time collaboration",
        description:"Share files and folders with friends, family, and colleagues.",
        iconUrl:"../images/icon-collaboration.svg"
    },
    {
        title:"Store any file type",
        description:"Keep all your files secure in one place.",
        iconUrl:"../images/icon-any-file.svg"
    }
]
 
export const Features = () => {
  return (
    <div className="flex flex-col gap-20 mt-[140px]">
        {
            features.map(({title, description, iconUrl}: Feature)=> (
                <div className="flex flex-col items-center text-center">
                    <img src={iconUrl} alt={title} />
                    <div>
                        <h3 className="font-bold mb-2">{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
