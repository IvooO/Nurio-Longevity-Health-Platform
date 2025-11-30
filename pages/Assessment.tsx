import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  Check,
  Scale,
  TestTube,
  Salad,
  HeartPulse,
  Lock
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { RadioGroup, RadioGroupItem } from '../components/ui/RadioGroup';
import { Checkbox } from '../components/ui/Checkbox';
import { Textarea } from '../components/ui/Textarea';
import SiteFooter from '../components/ui/SiteFooter';

export default function Assessment() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    programs: [],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    height: '',
    weight: '',
    healthConditions: [],
    medications: '',
    allergies: '',
    goals: '',
    consent: false
  });

  const programs = [
    {
      id: 'weight-loss',
      icon: Scale,
      title: 'Weight Loss',
      highlight: 'weight',
      description: 'GLP-1 treatments',
      color: '#C9A86C',
      bgColor: '#FDF8F0'
    },
    {
      id: 'lab-testing',
      icon: TestTube,
      title: 'Lab Testing',
      highlight: 'what matters',
      description: 'Biomarker analysis',
      color: '#7BA3A8',
      bgColor: '#F0F6F6'
    },
    {
      id: 'nutrition',
      icon: Salad,
      title: 'Nutrition',
      highlight: 'smarter',
      description: 'Personalized plans',
      color: '#8B9E8B',
      bgColor: '#F4F7F4'
    },
    {
      id: 'longevity',
      icon: HeartPulse,
      title: 'Longevity',
      highlight: 'longer',
      description: 'Healthspan coaching',
      color: '#A08BA0',
      bgColor: '#F7F4F7'
    }
  ];

  const healthConditions = [
    'Type 2 Diabetes',
    'High Blood Pressure',
    'High Cholesterol',
    'Heart Disease',
    'Thyroid Condition',
    'Kidney Disease',
    'Liver Disease',
    'Sleep Apnea',
    'None of the above'
  ];

  const handleProgramToggle = (programId) => {
    setFormData(prev => ({
      ...prev,
      programs: prev.programs.includes(programId)
        ? prev.programs.filter(p => p !== programId)
        : [...prev.programs, programId]
    }));
  };

  const handleConditionToggle = (condition) => {
    setFormData(prev => ({
      ...prev,
      healthConditions: prev.healthConditions.includes(condition)
        ? prev.healthConditions.filter(c => c !== condition)
        : [...prev.healthConditions, condition]
    }));
  };

  const renderStep = () => {
    switch(step) {
      case 0:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-[#1A1A1A] mb-2">What brings you here today?</h2>
              <p className="text-[#6B6B6B]">Select all that interest you.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {programs.map((program) => {
                const Icon = program.icon;
                const isSelected = formData.programs.includes(program.id);
                return (
                  <button
                    key={program.id}
                    onClick={() => handleProgramToggle(program.id)}
                    className={`text-left rounded-2xl p-6 transition-all ${
                      isSelected 
                        ? 'ring-2 ring-[#1A1A1A]' 
                        : 'hover:shadow-md'
                    }`}
                    style={{ backgroundColor: program.bgColor }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${program.color}30` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: program.color }} />
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-medium text-[#1A1A1A] mb-1">{program.title}</h3>
                    <p className="text-sm text-[#6B6B6B]">{program.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        );
        
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-[#1A1A1A] mb-2">Let's get to know you</h2>
              <p className="text-[#6B6B6B]">Basic information to personalize your experience.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-[#1A1A1A]">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="h-12 rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-[#1A1A1A]">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="h-12 rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#1A1A1A]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12 rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-[#1A1A1A]">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12 rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="birthDate" className="text-[#1A1A1A]">Date of Birth</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  className="h-12 rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[#1A1A1A]">Gender</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => setFormData({...formData, gender: value})}
                  className="flex gap-4 pt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="font-normal text-[#6B6B6B]">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="font-normal text-[#6B6B6B]">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="font-normal text-[#6B6B6B]">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-[#1A1A1A] mb-2">Health information</h2>
              <p className="text-[#6B6B6B]">This helps us assess eligibility and personalize recommendations.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="height" className="text-[#1A1A1A]">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  value={formData.height}
                  onChange={(e) => setFormData({...formData, height: e.target.value})}
                  className="h-12 rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                  placeholder="175"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-[#1A1A1A]">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                  className="h-12 rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                  placeholder="80"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <Label className="text-[#1A1A1A]">Do you have any of these conditions?</Label>
              <div className="grid sm:grid-cols-2 gap-3">
                {healthConditions.map((condition) => (
                  <div key={condition} className="flex items-center space-x-3">
                    <Checkbox
                      id={condition}
                      checked={formData.healthConditions.includes(condition)}
                      onCheckedChange={() => handleConditionToggle(condition)}
                    />
                    <Label htmlFor={condition} className="font-normal text-[#6B6B6B]">{condition}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-[#1A1A1A] mb-2">A few more details</h2>
              <p className="text-[#6B6B6B]">Help us understand your complete health picture.</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="medications" className="text-[#1A1A1A]">Current Medications</Label>
                <Textarea
                  id="medications"
                  value={formData.medications}
                  onChange={(e) => setFormData({...formData, medications: e.target.value})}
                  className="rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                  placeholder="List any medications you're taking..."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="allergies" className="text-[#1A1A1A]">Allergies</Label>
                <Textarea
                  id="allergies"
                  value={formData.allergies}
                  onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                  className="rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                  placeholder="List any known allergies..."
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goals" className="text-[#1A1A1A]">What are your goals?</Label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData({...formData, goals: e.target.value})}
                  className="rounded-xl border-[#E8E4DC] focus:border-[#1A1A1A] focus:ring-[#1A1A1A]"
                  placeholder="What are you hoping to achieve?"
                  rows={4}
                />
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-[#1A1A1A] mb-2">Review and submit</h2>
              <p className="text-[#6B6B6B]">Please confirm your information.</p>
            </div>
            
            <div className="bg-[#F5F3EF] rounded-2xl p-6 space-y-4">
              <div>
                <p className="text-sm text-[#6B6B6B]">Selected Programs</p>
                <p className="font-medium text-[#1A1A1A]">
                  {formData.programs.map(p => programs.find(prog => prog.id === p)?.title).join(', ') || 'None'}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#6B6B6B]">Name</p>
                  <p className="font-medium text-[#1A1A1A]">{formData.firstName} {formData.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-[#6B6B6B]">Email</p>
                  <p className="font-medium text-[#1A1A1A]">{formData.email}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({...formData, consent: checked})}
              />
              <Label htmlFor="consent" className="font-normal text-sm text-[#6B6B6B] leading-relaxed">
                I consent to the processing of my personal and health information as described in the{' '}
                <Link to="/privacy" className="text-[#1A1A1A] underline">Privacy Policy</Link>.
                I understand this is not a substitute for professional medical advice.
              </Label>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="text-center space-y-8 py-12">
            <div className="w-16 h-16 rounded-full bg-[#8B9E8B] flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-white" />
            </div>
            
            <div>
              <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">You're all set</h2>
              <p className="text-[#6B6B6B] max-w-md mx-auto">
                Our team will review your information and reach out within 1-2 business days.
              </p>
            </div>
            
            <div className="bg-[#F5F3EF] rounded-xl p-4 max-w-sm mx-auto">
              <p className="text-sm text-[#6B6B6B]">
                Check <strong>{formData.email}</strong> for confirmation.
              </p>
            </div>
            
            <Link to="/">
              <Button className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-full px-8 h-12">
                Return to home
              </Button>
            </Link>
          </div>
        );
        
      default:
        return null;
    }
  };

  const canProceed = () => {
    switch(step) {
      case 0: return formData.programs.length > 0;
      case 1: return formData.firstName && formData.lastName && formData.email;
      case 2: return formData.height && formData.weight;
      case 3: return true;
      case 4: return formData.consent;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="text-2xl font-serif text-[#1A1A1A]">
            velora
          </Link>
        </div>

        {/* Progress */}
        {step < 5 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-[#6B6B6B]">Step {step + 1} of 5</span>
            </div>
            <div className="h-1 bg-[#E8E4DC] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#1A1A1A] rounded-full transition-all duration-500"
                style={{ width: `${((step + 1) / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8E4DC]">
          {renderStep()}
          
          {step < 5 && (
            <div className="flex justify-between pt-8 mt-8 border-t border-[#E8E4DC]">
              {step > 0 ? (
                <Button
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                  className="text-[#6B6B6B] hover:text-[#1A1A1A]"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}
              
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="bg-[#1A1A1A] hover:bg-[#333] text-white rounded-full px-8 h-12"
              >
                {step === 4 ? 'Submit' : 'Continue'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Security */}
        {step < 5 && (
          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-[#6B6B6B]">
            <Lock className="h-4 w-4" />
            <span>Your information is encrypted and secure</span>
          </div>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}