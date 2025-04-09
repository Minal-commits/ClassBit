import { supabase } from '../supabaseClient';
import { getALLExamples } from './getALLExamples';
import { getAllTestcases } from './getALLTestCases';

export const getAproblem = async (problemID) => {
  try {
    const { data: problem, error } = await supabase
      .from('PROBLEMS')
      .select('*')
      .eq('id', problemID)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return null;
    }

    if (problem) {
      const [testcases, examples] = await Promise.all([
        getAllTestcases(problemID),
        getALLExamples(problemID)
      ]);

      return {
        problem,
        testcases,
        examples
      };
    }

    return null;
  } catch (err) {
    console.error('Unexpected error fetching problem:', err);
    return null;
  }
};
