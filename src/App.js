import React from "react";
import "./App.css";
import { Field, Form, withFormik } from "formik";
import * as Yup from "yup";

const App = ({ values, errors, touched }) => (
	<div className='flex justify-center items-center'>
		<Form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5 text-center self-center'>
			<div className='mb-4'>
				{touched.email && errors.email && (
					<p className='text-red-500 text-xs italic'>{errors.email}</p>
				)}
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Email
					<Field
						type='email'
						name='email'
						placeholder='Email'
						className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
					/>
				</label>
			</div>
			<div>
				{touched.password && errors.password && (
					<p className='text-red-500 text-xs italic'>{errors.password}</p>
				)}
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					Password
					<Field
						type='password'
						name='password'
						placeholder='Password'
						className='shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
					/>
				</label>
			</div>

			<br />

			<label className='block text-gray-700 text-sm font-bold mb-5'>
				Choose A Plan:
				<Field component='select' name='plan' className='ml-3'>
					<option value='free'>Free</option>
					<option value='premium'>Premium</option>
				</Field>
			</label>

			<button
				className='bg-blue-500 hover:bg-green-300 text-white font-bold py-2 px-4 mb-5 rounded focus:outline-none focus:shadow-outline'
				type='submit'
			>
				Submit
			</button>
			<br />
			<label className='block text-gray-700 text-sm font-bold mb-2'>
				<Field
					type='checkbox'
					name='newsletter'
					checked={values.newsletter}
					className='mr-3'
				/>
				Join Our Newsletter
			</label>
		</Form>
	</div>
);

const FormikApp = withFormik({
	mapPropsToValues({ email, password, newsletter, plan }) {
		return {
			email: email || "",
			password: password || "",
			newsletter: newsletter || true,
			plan: plan || "free"
		};
	},
	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email("That Is Not An Email Idiot!")
			.required("You Have To Enter A Password"),
		password: Yup.string()
			.min(6, "Type More Letters!!")
			.required("Come On, Try Harder!")
	}),
	handleSubmit(values) {
		console.log(values);
	}
})(App);

export default FormikApp;
