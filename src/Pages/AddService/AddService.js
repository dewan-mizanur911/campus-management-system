import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices';
import './AddService.css';

const AddService = () => {
    const {
      register,
      reset,
      formState: { errors },
      handleSubmit,
  } = useForm();
  const history = useHistory();
  const { user } = useAuth();
  const { services } = useServices();
  const { id } = useParams();
  const service = services.length && services.find(svc => svc._id === id);


  const onSubmit = (data) => {
    console.log(data);

    
    fetch("http://localhost:5000/addedServices", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          console.log(result.insertedId);
          history.push('/addededService');
          reset();
        }
      })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="service-form w-50 border border-2 p-2 border-dark mx-auto rounded my-5">
      <label htmlFor="firstName">Your Name</label>
      <input defaultValue={user.displayName} {...register("firstName")} />
      {errors.firstName?.type === "required" && "First name is required"}

      <label htmlFor="email">Your Email</label>
      <input defaultValue={user.email} {...register("email")} />
      {errors.email && "Last name is required"}

      <label htmlFor="service">Service Name</label>
      <input {...register("service")}/>
      {errors.service && "Service name is required"}
      <small>Do you want to add <b>{service?.name}</b>? Write the Name of the Service in the Service name field.</small>

      <input type="submit" className="mt-3" />
      </form>
  );
};

export default AddService;