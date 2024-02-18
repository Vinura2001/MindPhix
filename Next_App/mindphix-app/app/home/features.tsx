import Feature from "@/components/Feature";
function Features() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-10" id="features">
      <p className="text-xl text-blue-800 font-bold text-center">Features</p>
      <h1 className="text-3xl text-center pb-6 mx-auto w-5/6">
        MindPhix Features and Services
      </h1>
      <Feature
        title="Depression Assessment"
        description="Introducing our groundbreaking depression assessment feature, driven by a MindPhix AI chatbot crafted by our expert team. Seamlessly incorporating the PHQ-9 questionnaire, this intelligent chatbot transcends conventional methods. It dynamically adjusts its queries based on user responses, intuitively extracting additional relevant parameters to ensure a thorough and personalized assessment of depression levels. "
        imageUrl="/home-assets/blog-assets/assessment.jpg"
        isImageOnRight={true} // Change this prop to control the layout
        imageHeight={400}
        imageWidth={400}
      />
      <Feature
        title="Personalised Reccomendations"
        description="Experience a tailored path to well-being with our Personalized Recommendations feature. Our intelligent chatbot goes beyond generic advice, understanding your unique journey and needs. Through comprehensive analysis of your interactions, the chatbot provides personalized recommendations for coping with depression and enhancing overall mental health."
        imageUrl="/home-assets/blog-assets/reccomendations.jpg"
        isImageOnRight={true} // Change this prop to control the layout
        imageHeight={400}
        imageWidth={400}
      />
      <Feature
        title="Weekly Progress Report"
        description="Introducing the Personalized Progress Report feature, our chatbot goes beyond immediate support by allowing users to track their own journey and gain deeper insights into their mental health over time. Delve into comprehensive reports highlighting mood scores, depression level trends, identified patterns, and personalized recommendations."
        imageUrl="/home-assets/blog-assets/progress-report.jpg"
        isImageOnRight={true} // Change this prop to control the layout
        imageHeight={400}
        imageWidth={400}
      />
      <Feature
        title="Spread Depression Awareness"
        description="This feature empowers users to explore and understand various aspects of depression, from symptoms and causes to available treatments and support options. Designed to be an accessible resource, the chatbot offers a safe space for users to ask questions and receive reliable information, fostering awareness and education about depression."
        imageUrl="/home-assets/blog-assets/information.jpg"
        isImageOnRight={true} // Change this prop to control the layout
        imageHeight={400}
        imageWidth={400}
      />
    </div>
  );
}
export default Features;