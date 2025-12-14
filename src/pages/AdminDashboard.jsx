import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "@/constant";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await fetch("https://kapturevents.com/admin/getReviews.php", {
      credentials: "include",
    });

    if (res.status === 401) {
      navigate("/admin-018kx/login");
      return;
    }

    const data = await res.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const approve = async (index) => {
    await fetch("https://kapturevents.com/admin/approveReview.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ index }),
    });
    fetchReviews();
  };

  const reject = async (index) => {
    await fetch("https://kapturevents.com/admin/rejectReview.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ index }),
    });
    fetchReviews();
  };

  const remove = async (index) => {
    await fetch("https://kapturevents.com/admin/deleteReview.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ index }),
    });
    fetchReviews();
  };

  const logout = async () => {
    await fetch("https://kapturevents.com/admin/logout.php", {
      credentials: "include",
    });
    navigate("/admin");
  };

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold" style={{ color: COLORS.MAGENTA }}>
            Review Moderation
          </h1>

          <button
            onClick={logout}
            className="px-5 py-2 rounded-lg text-white"
            style={{ backgroundColor: COLORS.MAGENTA }}
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md">
              <p className="text-gray-800 mb-3">{r.review}</p>

              <div className="flex justify-between items-center">
                <span
                  className="font-semibold"
                  style={{ color: COLORS.MAGENTA }}
                >
                  — {r.name}
                </span>

                <div className="flex gap-3">
                  {!r.approved && (
                    <button
                      onClick={() => approve(i)}
                      className="px-4 py-2 rounded-lg text-white bg-green-600"
                    >
                      Approve
                    </button>
                  )}

                  <button
                    onClick={() => remove(i)}
                    className="px-4 py-2 rounded-lg text-white bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
