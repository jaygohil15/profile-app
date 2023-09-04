import './ProfileDetailsPage.css';

const ProfileDetailsPage = ({ user, getData }: any) => {

   function fetchNewProfile(): void {
      getData();
   }

   function profileLayout() {
      return (
         <div className="profilecontainer">
            <div className="profilecontainer-image">
               <img src={user.picture.large} alt='Not Available' />
            </div>
            <div className='profilecontainer-details'>
               <div className="profilecontainer-details-heading">Profile</div>
               <div className='profilecontainer-details-main'>
                  <div>
                     <label htmlFor='firstname'>First Name</label>
                     <input id='firstname' value={user.name.first} readOnly />
                     <label htmlFor='lastname'>Last Name</label>
                     <input id='lastname' value={user.name.last} readOnly />
                  </div>
                  <div>
                     <label htmlFor='country'>Country</label>
                     <input id='country' value={user.location.country} readOnly />
                     <label htmlFor='phone'>Phone</label>
                     <input id='phone' value={user.phone} readOnly />
                  </div>
               </div>

               <div className='profilecontainer-details-footer'>
                  <label htmlFor='email' >E-mail</label>
                  <input id='email' value={user.email} readOnly />
               </div>

               <div className='profilecontainer-btn'>
                  <button onClick={fetchNewProfile}>Fetch new profile</button>
               </div>

            </div>
         </div>
      )

   }

   return (
      <>
         {user ? profileLayout() : <>Loading ...</>}
      </>
   )
}

export default ProfileDetailsPage;