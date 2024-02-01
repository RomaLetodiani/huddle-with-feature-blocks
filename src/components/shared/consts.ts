import logo from '../../assets/images//logo.svg';
import heroImg from '../../assets/images/hero.svg';

// middle images
import img1 from '../../assets/images/middle1.svg';
import img2 from '../../assets/images/middle2.svg';
import img3 from '../../assets/images/middle3.svg';

// Social icons
import facebook from '../../assets/icons/socials/icon-facebook.svg';
import instagram from '../../assets/icons/socials/icon-instagram.svg';
import twitter from '../../assets/icons/socials/icon-twitter.svg';

// Footer icons
import location from '../../assets/icons/footer/location-pin.svg';
import phone from '../../assets/icons/footer/phone-call.svg';
import email from '../../assets/icons/footer/gmail.svg';

export const GlobalObj = {
  logo,
  header: {
    button: 'Try It Free',
  },
  hero: {
    title: 'Build The Community Your Fans Will Love',
    desc: 'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.',
    button: 'Get Started For Free',
    img: heroImg,
  },
  middle: [
    {
      title: 'Grow Together',
      desc: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
      img: img1,
    },
    {
      title: 'Flowing Conversations',
      desc: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      img: img2,
    },
    {
      title: 'Your Users',
      desc: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      img: img3,
    },
  ],
  bottom: {
    title: 'Ready To Build Your Community?',
    button: 'Get Started For Free',
  },
  footer: {
    left: [
      {
        icon: location,
        alt: 'Location',
        text: '4724 Newton Street',
      },
      {
        icon: phone,
        alt: 'Phone',
        text: '+1-543-123-4567',
      },
      {
        icon: email,
        alt: 'Email',
        text: 'example@huddle.com',
      },
    ],
    middle: [
      ['About Us', 'What We Do', 'FAQ'],
      ['Career', 'Blog', 'Contact Us'],
    ],

    copyright: '© Copyright 2020 Huddle. All rights reserved',
  },
  socials: [
    {
      id: 1,
      icon: facebook,
      alt: 'Facebook',
      link: 'https://www.facebook.com/LetodianiRoma/',
    },
    {
      id: 2,
      icon: twitter,
      alt: 'Twitter',
      link: 'https://twitter.com/l3todianiroma',
    },
    {
      id: 3,
      icon: instagram,
      alt: 'Instagram',
      link: 'https://www.instagram.com/roma.letodiani',
    },
  ],
};
