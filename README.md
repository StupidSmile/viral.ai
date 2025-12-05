# viral.ai 📱

A mobile app that uses generative AI (large language and image/video models) to help users create viral social content.

## Features ✨

### 🎨 AI-Powered Content Creation Suite

#### 🤖 Text Content Generation
- Generate captions, posts, threads, stories, and video scripts
- Multiple content tones: Casual, Professional, Humorous, Inspirational, Controversial
- Platform-specific optimization (Instagram, Twitter, TikTok, LinkedIn, Facebook)
- Custom topic input for personalized content

#### 🖼️ AI Image Generation
- Create stunning visuals with AI prompts
- Multiple art styles: Realistic, Artistic, Minimal, Vibrant, Dark, Cartoon
- Aspect ratio options: Square (1:1), Portrait (9:16), Landscape (16:9), Story (4:5)
- Image upload and editing capabilities
- Regenerate and refine images

#### 🧵 Advanced Thread Builder
- Create engaging Twitter/X threads with multiple connected posts
- Thread lengths: 3, 5, 8, or 10 tweets
- Narrative tones: Educational, Storytelling, Controversial, Humorous, Motivational
- Character count tracking and tweet management
- Edit, delete, and reorder thread posts

#### 🎬 Video Creator
- Generate videos with AI narration and visuals
- Video types: Short (15-30s), Medium (1-3min), Long (5-10min)
- Content styles: Educational, Entertainment, Motivational, Tutorial, Review, Storytelling
- Voice options: Natural, Professional, Energetic, Calm, Dramatic
- Background music selection and script generation
- Video templates for quick creation

### 📚 Content Management
- Comprehensive content library for all generated content
- Filter by content type, platform, and date
- View engagement metrics and performance
- Edit, copy, share, and organize content
- Media gallery for images and videos

### ⚙️ Advanced AI Settings
- Choose AI model (GPT-4, Claude, etc.)
- Adjust creativity levels (temperature)
- Set content length limits
- Configure image generation parameters
- Voice and video quality settings
- Auto-save and backup preferences

### 🎨 Modern Mobile UI
- Clean, intuitive interface
- Dark mode support (coming soon)
- Smooth animations and transitions
- Responsive design

## Tech Stack 🛠️

- **Framework**: React Native with Expo
- **Navigation**: React Navigation (Native Stack)
- **Language**: TypeScript
- **Styling**: React Native StyleSheet
- **AI Integration**: Ready for OpenAI API, Anthropic Claude, etc.

## Getting Started 🚀

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ViralContentCreator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up AI API keys**
   ```bash
   # Copy the example environment file
   cp env.example .env

   # Edit .env and add your API keys
   # Required: OpenAI API key for text and image generation
   # Optional: ElevenLabs for voice, Anthropic for alternative AI
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on platform**
   - **Web**: Press `w` in terminal or `npm run web`
   - **iOS**: Press `i` in terminal or `npm run ios`
   - **Android**: Press `a` in terminal or `npm run android`

### AI API Setup 🔑

#### Required APIs
- **OpenAI API** - For text generation, image creation, and threads
  - Sign up: https://platform.openai.com/
  - Cost: ~$0.002-0.06 per request
  - Models: GPT-4, DALL-E 3

#### Optional APIs
- **ElevenLabs** - For voice synthesis in videos
  - Sign up: https://elevenlabs.io/
  - Cost: ~$0.15 per 1K characters
- **Anthropic Claude** - Alternative AI provider
  - Sign up: https://console.anthropic.com/
  - Cost: ~$0.01-0.03 per 1K tokens

#### Environment Variables
```bash
# Required
EXPO_PUBLIC_OPENAI_API_KEY=sk-your-key-here

# Optional
EXPO_PUBLIC_ELEVENLABS_API_KEY=your-key-here
EXPO_PUBLIC_ANTHROPIC_API_KEY=your-key-here
```

## App Structure 📁

```
viral.ai/
├── screens/
│   ├── HomeScreen.tsx             # Main dashboard & navigation
│   ├── CreateContentScreen.tsx    # Text content generation
│   ├── ImageGeneratorScreen.tsx   # AI image creation
│   ├── ThreadBuilderScreen.tsx    # Twitter/X thread builder
│   ├── VideoCreatorScreen.tsx     # Video content creation
│   ├── ContentLibraryScreen.tsx   # Content management
│   └── SettingsScreen.tsx         # AI & app settings
├── components/                    # Reusable UI components
├── types/                        # TypeScript definitions
├── assets/                       # Images and icons
├── App.tsx                       # Main app with navigation
└── package.json
```

## Key Screens 📱

### Home Dashboard
- Welcome interface with viral.ai branding
- Quick navigation to all content creation tools
- Today's creation stats and recent activity
- Feature overview and getting started guide

### Create Content (Text)
- Multi-format content generation (captions, posts, stories)
- Advanced tone and platform customization
- AI-powered content creation with style options
- One-click save and share functionality

### AI Image Generator
- Text-to-image creation with detailed prompts
- Multiple artistic styles and aspect ratios
- Image refinement and regeneration
- Upload existing images for editing
- Recent generations gallery

### Thread Builder
- Professional Twitter/X thread creation
- Configurable thread lengths (3-10 tweets)
- Narrative tone selection and content flow
- Real-time character counting and validation
- Thread preview and editing tools

### Video Creator
- Complete video production with AI narration
- Script generation and voice synthesis
- Multiple video templates and styles
- Background music and audio customization
- Export-ready video creation

### Content Library
- Unified content management across all formats
- Advanced filtering and search capabilities
- Performance analytics and engagement tracking
- Batch operations and content organization
- Export and sharing tools

### Settings & AI Configuration
- Comprehensive AI model selection
- Creative parameter tuning (temperature, length)
- Platform-specific optimization settings
- Voice and video quality preferences
- Data management and export options

## AI Integration 🔮

The app is designed to integrate with multiple AI providers:

### Planned Integrations
- **OpenAI GPT-4**: Text generation and content creation
- **Anthropic Claude**: Advanced content understanding
- **DALL-E / Midjourney**: Image generation for posts
- **Runway ML / Pika**: Video generation for content

### Implementation
```typescript
// Example AI service integration
const generateContent = async (prompt: string, options: AIOptions) => {
  const response = await openai.createCompletion({
    model: options.model,
    prompt: prompt,
    temperature: options.temperature,
    max_tokens: options.maxTokens,
  });
  return response.choices[0].text;
};
```

## Future Enhancements 🚀

- [ ] **Image Generation**: AI-powered image creation for posts
- [ ] **Video Scripts**: Automated video content creation
- [ ] **Social Integration**: Direct posting to platforms
- [ ] **Analytics Dashboard**: Detailed performance metrics
- [ ] **Collaboration**: Team content creation features
- [ ] **Templates**: Pre-built content templates
- [ ] **Scheduling**: Automated posting scheduler

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact 📧

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ for content creators everywhere**